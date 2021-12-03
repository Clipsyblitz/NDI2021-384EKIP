from bs4 import BeautifulSoup
import requests
import threading

url = "https://sauveteurdudunkerquois.fr/81arm-0227b/"


def worker():
    while 1:
        result = requests.get(url)
        result2 = requests.get(url)
        result = requests.get(url)
        print("pinged!")

for i in range (1,100) :
    t = threading.Thread(target = worker)
    t.start()
    
    
