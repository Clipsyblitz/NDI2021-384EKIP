from bs4 import BeautifulSoup
import numpy as np
import requests

resume = []
text_file = open("events_links.txt", "r")
lines = text_file.readlines()


for link in lines :
    result = requests.get(link)
    doc = BeautifulSoup(result.text, "html.parser")
    content = doc.find_all(["p"])

    if content[0].text == "":
        if content[1].find(["strong"]) != [] :
            print (content[1].text)
            print("\n NEXT")
            resume.append(content[1].text)
    else :
        if content[0].find(["strong"]) != [] :
            print(content[0].text)
            print("\n NEXT")
            resume.append(content[0].text)


np.savetxt("resume.txt", resume, fmt="%s")
        

    #content = doc.find('div',{'class':"entry clr"})
    #staff = content.find('sup', string = "Patron" )
    
    