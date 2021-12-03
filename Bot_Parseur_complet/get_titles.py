from bs4 import BeautifulSoup
import numpy as np
import requests

titles = []
text_file = open("events_links.txt", "r")
lines = text_file.readlines()

for link in lines :
    result = requests.get(link)
    doc = BeautifulSoup(result.text, "html.parser")

    title_container = doc.find(["h1"])
    if hasattr(title_container,'text') :
        print(title_container.text)
        titles.append(title_container.text)
    else:
        titles.append(" ")

np.savetxt("titles.txt", titles,fmt="%s")
    