from bs4 import BeautifulSoup
import numpy as np
import requests

dates = []
text_file = open("events_links.txt", "r")
lines = text_file.readlines()

for link in lines :
    result = requests.get(link)
    doc = BeautifulSoup(result.text, "html.parser")
    date = doc.find('h2',{'class':"has-text-align-center"})

    if hasattr(date, 'text'):
        if '1' in date.text :
            if "personne" not in date.text:
                if "Equipage" not in date.text:
                    print(date.text)
                    dates.append(date)

np.savetxt("events_dates.txt", dates,fmt="%s")