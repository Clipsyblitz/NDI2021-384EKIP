from bs4 import BeautifulSoup
import numpy as np
import requests

urls = []
event_links = []
dates = []

url1="https://sauveteurdudunkerquois.fr/18eme-siecle/"
url2="https://sauveteurdudunkerquois.fr/1800-1824/"
url3="https://sauveteurdudunkerquois.fr/1825-1849/"
url4="https://sauveteurdudunkerquois.fr/1850-1859/"
url5="https://sauveteurdudunkerquois.fr/2691-2/"
url6="https://sauveteurdudunkerquois.fr/1870-1879/"
url7="https://sauveteurdudunkerquois.fr/1880-1889/"
url8="https://sauveteurdudunkerquois.fr/1890-1899/"

url9="https://sauveteurdudunkerquois.fr/1900-1909/"
url10="https://sauveteurdudunkerquois.fr/1910-1919/"
url11="https://sauveteurdudunkerquois.fr/1920-1929/"
url12="https://sauveteurdudunkerquois.fr/1930-1939/"
url13="https://sauveteurdudunkerquois.fr/1940-1949/"
url14="https://sauveteurdudunkerquois.fr/bataille-de-dunkerque/"
url15="https://sauveteurdudunkerquois.fr/1950-1959/"
url16="https://sauveteurdudunkerquois.fr/1960-1969/"
url17="https://sauveteurdudunkerquois.fr/1970-1979/"
url18="https://sauveteurdudunkerquois.fr/1980-1989/"
url19="https://sauveteurdudunkerquois.fr/1990-1999/"

url20="https://sauveteurdudunkerquois.fr/snsm-2000-2009/"
url21="https://sauveteurdudunkerquois.fr/snsm-2010-2019/"
url22="https://sauveteurdudunkerquois.fr/snsm-2020-2029/"

urls.append(url1)
urls.append(url2)
urls.append(url3)
urls.append(url4)
urls.append(url5)
urls.append(url6)
urls.append(url7)
urls.append(url8)
urls.append(url9)
urls.append(url10)
urls.append(url11)
urls.append(url12)
urls.append(url13)
urls.append(url14)
urls.append(url15)
urls.append(url16)
urls.append(url17)
urls.append(url18)
urls.append(url19)
urls.append(url20)
urls.append(url21)
urls.append(url22)



for url in urls :
    result = requests.get(url)
    doc = BeautifulSoup(result.text, "html.parser")

    #get all event links
    link_list_container = doc.find('article',{'class':"single-page-article clr"})
    link_list = link_list_container.find_all(["a"])
    for l in link_list:
        event_links.append(l["href"])

np.savetxt("events_links.txt", event_links,fmt="%s")

#get all event dates
#date_list = doc.findAll(["h2"])

#for date in date_list :
    #dates.append(int(date_list[0].text))
#print(dates)

print(event_links)