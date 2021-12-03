from bs4 import BeautifulSoup
import numpy as np
import requests
import threading

dates = []
text_file = open("/home/valentin/json_nuit/events_links.txt", "r")
lines = text_file.readlines()

nthreads = 20
res = np.array_split(lines, nthreads)


def changeDate(line):
    line = line.replace("\n", "")
    line = line.replace(" ", "")

    if '1er' in line:
        line = line.replace('1er', '1')
    if 'janvier' in line:
        line = line.replace('janvier', '-01-')
    elif 'février' in line:
        line = line.replace('février', '-02-')
    elif 'mars' in line:
        line = line.replace('mars', '-03-')
    elif 'avril' in line:
        line = line.replace('avril', '-04-')
    elif 'mai' in line:
        line = line.replace('mai', '-05-')
    elif 'juin' in line:
        line = line.replace('juin', '-06-')
    elif 'juillet' in line:
        line = line.replace('juillet', '-07-')
    elif 'août' in line:
        line = line.replace('août', '-08-')
    elif 'septembre' in line:
        line = line.replace('septembre', '-09-')
    elif 'octobre' in line:
        line = line.replace('octobre', '-10-')
    elif 'novembre' in line:
        line = line.replace('novembre', '-11-')
    elif 'décembre' in line:
        line = line.replace('décembre', '-12-')
    else:
        return
    return line


for link in lines:
    result = requests.get(link)
    doc = BeautifulSoup(result.text, "html.parser")
    date = doc.find('h2', {'class': "has-text-align-center"})
    inserted = False

    if hasattr(date, 'text'):
        if '1' in date.text:
            if "personne" not in date.text:
                if "Equipage" not in date.text:
                    res = changeDate(date.text)
                    print(res)
                    dates.append(date)
                    inserted = True
    if not inserted:
        print("")
        dates.append("")

np.savetxt("events_dates.txt", dates, fmt="%s")
