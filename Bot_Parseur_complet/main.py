from bs4 import BeautifulSoup
import numpy as np
import requests
import json

filename = "data.json"

titles_file = open("titles.txt", "r")
titles_lines = titles_file.readlines()

resume_file = open("resume.txt", "r")
resume_lines = resume_file.readlines()

dates_file = open("dates.txt", "r")
dates_lines = dates_file.readlines()

with open(filename) as fp:
  datas = json.load(fp)

for i in range (0,905) :
    datas.append({
        "title": titles_lines[i],
        "date": dates_lines[i],
        "resume": resume_lines[i]
    })

with open(filename, 'w') as json_file:
    json.dump(datas, json_file, indent=4, separators=(',',': '))
print(datas)







    
