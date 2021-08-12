import requests
from bs4 import BeautifulSoup
web_url = 'https://covidvax.live/en/location/qat'
html_text = requests.get(web_url).text
soup = BeautifulSoup(html_text, 'html.parser')

#for link in soup.find_all('a'):
#    print(link.get('href'))
#id="tileTotalCount"
total = soup.find(id='tileTotalCount').text
print(total)
fullyvaccinated = soup.find(id='tilePeopleFullyVaccinated').text
print(fullyvaccinated)
partiallyvaccinated = soup.find(id='tilePeopleVaccinated').text
print(partiallyvaccinated)
