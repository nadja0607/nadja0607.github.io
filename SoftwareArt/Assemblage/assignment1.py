# -*- coding: utf-8 -*-
"""Assignment1.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/10cxXTuh4eaB0RbM2YLhGDCy4PX-hQNW7
"""

# Importing libraries for getting and scraping web pages
import requests
from bs4 import BeautifulSoup
import re, random

print("What kind of news do you want to read today?")
print("1.Sports      2.Celebrities      3.Politics")

while True:
  choice = int(input())
  if choice == 1:
    print("Chosen category: Sports")
    break
  elif choice == 2:
    print("Chosen category: Celebrities")
    break
  elif choice == 3:
    print("Chosen category: Politics")
    break
  print("Invalid input. Please choose from:\n1.Sports      2.Celebrities      3.Politics")

print("What was your favorite cartoon as a child?")
print("1.Mickey Mouse      2.Phineas and Ferb      3.Powerpuff Girls     4.The Simpsons     5.Spongebob")

while True:
  choice2 = int(input())

  if choice2 == 1:
    print("Chosen cartoon: Mickey Mouse")
    break
  elif choice2 == 2:
    print("Chosen cartoon: Phineas and Ferb")
    break
  elif choice2 == 3:
    print("Chosen cartoon: Powerpuff Girls")
    break
  elif choice2 == 4:
    print("Chosen cartoon: The Simpsons")
    break
  elif choice2 == 5:
    print("Chosen cartoon: Spongebob")
    break
  print("Invalid input, Please choose from:\n1.Mickey Mouse      2.Phineas and Ferb      3.Powerpuff Girls     4.The Simpsons     5.Spongebob")

mickey_characters = ['Mickey Mouse','Minnie Mouse', 'Pluto', 'Goofy', 'Donald Duck', "Daisy Duck", 'Clarabelle Cow']
pf_characters = ['Phineas Flynn', 'Ferb Fletcher', 'Candice Flynn', 'Perry The Platypus', 'Dr.Heinz Doofenshmirtz', 'Jeremy Johnson', 'Isabella Garcia-Shapiro']
ppg_characters = ['Buttercup', 'Bubbles', 'Blossom', 'Mojo Jojo', 'Professor Utonium']
simpsons_characters = ['Bart Simpson', 'Lisa Simpson', 'Homer Simpson', 'Marge Simpson', 'Krusty The Clown', 'Ned Flanders', 'Grandpa Simpson']
spongebob_characters = ['Spongebob Squarepants', 'Patrick Star', 'Squidward', 'Mr.Krabs', 'Sandy Cheeks', 'Plankton', 'Larry The Lobster']

sports1_url = 'https://edition.cnn.com/2022/01/30/tennis/australian-open-mens-final-nadal-medvedev-spt-intl/index.html'
sports2_url = 'https://edition.cnn.com/2022/02/03/football/senegal-afcon-final-cameroon-or-egypt-await-spt-intl/index.html'
sports3_url = 'https://edition.cnn.com/2021/07/02/golf/charlie-sifford-black-pga-tour-golf-cmd-spc-spt-intl/index.html'
celebs1_url = 'https://www.nytimes.com/2022/01/31/style/rihanna-pregnancy-photo.html'
celebs2_url = 'https://www.dailymail.co.uk/sciencetech/article-10440489/Kim-Kardashians-hourglass-figure-harmful-body-image-study-says.html'
celebs3_url = 'https://edition.cnn.com/2022/02/03/entertainment/channing-tatum-gambit-marvel-movies/index.html'
politics1_url = 'https://edition.cnn.com/2022/02/02/middleeast/uae-drone-interception-intl/index.html'
politics2_url = 'https://edition.cnn.com/2022/02/04/politics/pennsylvania-senate-republican-primary-mccormick-oz/index.html'
politics3_url = 'https://abcnews.go.com/Politics/legacy-lies-trump-weaponized-mistruths-presidency/story?id=75335019'

sports1_request = requests.get(sports1_url)
print("getting url: %s" % sports1_url)
if sports1_request.status_code == 200:
    print("got result!")
else:
    print("something went wrong, response code %i" % sports1_request.status_code)

sports2_request = requests.get(sports2_url)
print("getting url: %s" % sports2_url)
if sports2_request.status_code == 200:
    print("got result!")
else:
    print("something went wrong, response code %i" % sports2_request.status_code)

sports3_request = requests.get(sports3_url)
print("getting url: %s" % sports3_url)
if sports3_request.status_code == 200:
    print("got result!")
else:
    print("something went wrong, response code %i" % sports3_request.status_code)

celebs1_request = requests.get(celebs1_url)
print("getting url: %s" % celebs1_url)
if celebs1_request.status_code == 200:
    print("got result!")
else:
    print("something went wrong, response code %i" % celebs1_request.status_code)

celebs2_request = requests.get(celebs2_url)
print("getting url: %s" % celebs2_url)
if celebs2_request.status_code == 200:
    print("got result!")
else:
    print("something went wrong, response code %i" % celebs2_request.status_code)

celebs3_request = requests.get(celebs3_url)
print("getting url: %s" % celebs3_url)
if celebs3_request.status_code == 200:
    print("got result!")
else:
    print("something went wrong, response code %i" % celebs3_request.status_code)

politics1_request = requests.get(politics1_url)
print("getting url: %s" % politics1_url)
if politics1_request.status_code == 200:
    print("got result!")
else:
    print("something went wrong, response code %i" % politics1_request.status_code)

politics2_request = requests.get(politics2_url)
print("getting url: %s" % politics2_url)
if politics2_request.status_code == 200:
    print("got result!")
else:
    print("something went wrong, response code %i" % politics2_request.status_code)

politics3_request = requests.get(politics3_url)
print("getting url: %s" % politics3_url)
if politics3_request.status_code == 200:
    print("got result!")
else:
    print("something went wrong, response code %i" % politics3_request.status_code)

sport1_soup = BeautifulSoup(sports1_request.content, 'html.parser')
sport1_content = sport1_soup.find("div", {"class": "l-container"})
s1_text = sport1_content.text.replace('CNN.SportsTicker = {"apiBaseUrl":"//compositor.api.cnn.com/svc/mcs/v3/search/collection1","sections":{"football":"Football","golf":"Golf","tennis":"Tennis","motorsport":"Motorsport","sailing":"Sailing"}};Australian Open: Rafael Nadal wins record-breaking 21st grand slam after beating Daniil Medvedev in epic finalBy Matias Grez, CNNUpdated 1747 GMT (0147 HKT) January 30, 2022 Rafael Nadal beat Daniil Medvedev to win a record-breaking 21st grand slam title. (CNN)','')
sports1_lines = s1_text.split('.')
print(sports1_lines[0])

sports2_soup = BeautifulSoup(sports2_request.content, 'html.parser')
sports2_content = sports2_soup.find("div", {"class": "l-container"})
s2_text = sports2_content.text.replace('CNN.SportsTicker = {"apiBaseUrl":"//compositor.api.cnn.com/svc/mcs/v3/search/collection1","sections":{"football":"Football","golf":"Golf","tennis":"Tennis","motorsport":"Motorsport","sailing":"Sailing"}};AFCON: Senegal beats Burkina Faso to book spot in final as Cameroon or Egypt awaitBy Matias Grez, CNNUpdated 1106 GMT (1906 HKT) February 3, 2022 Senegal reached its second successive AFCON final with victory over Burkina Faso. (CNN)','')
sports2_lines = s2_text.split('.')
print(sports2_lines[0])

sports3_soup = BeautifulSoup(sports3_request.content, 'html.parser')
sports3_content = sports3_soup.find("div", {"class": "l-container"})
s3_text = sports3_content.text.replace('''An illustration from "Charlie Takes His Shot, How Charlie Sifford Broke the Color Line in Golf".Charlie Sifford: golf's first Black professional who paved the way for Tiger WoodsBy Ben Morse, CNNUpdated 1229 GMT (2029 HKT) July 2, 2021 (CNN)''', '')
sports3_lines = s3_text.split('.')
print(sports3_lines[0])

celebs1_soup = BeautifulSoup(celebs1_request.content, 'html.parser')
celebs1_content = celebs1_soup.find("div", {"class": "css-s99gbd StoryBodyCompanionColumn"})
c1_text = celebs1_content.text
celebs1_lines = c1_text.split('.')
print(celebs1_lines[0])

celebs2_soup = BeautifulSoup(celebs2_request.content, 'html.parser')
celebs2_content = celebs2_soup.find("div", {"itemprop": "articleBody"})
c2_text = celebs2_content.text
celebs2_lines = c2_text.split('.')
print(celebs2_lines[0])

celebs3_soup = BeautifulSoup(celebs3_request.content, 'html.parser')
celebs3_content = celebs3_soup.find("div", {"class": "l-container"})
c3_text = celebs3_content.text.replace('''Channing Tatum says he's 'traumatized' and can't watch Marvel superhero moviesBy Marianne GarveyUpdated 1545 GMT (2345 HKT) February 3, 2022 Channing Tatum attends the "Kingsman: The Golden Circle" world premiere held at Odeon Leicester Square on September 18, 2017 in London. (CNN)''','')
celebs3_lines = c3_text.split('.')
print(celebs3_lines[0])

politics1_soup = BeautifulSoup(politics1_request.content, 'html.parser')
politics1_content = politics1_soup.find("section", {"class": "zn zn-body-text zn-body zn--idx-0 zn--ordinary zn-has-multiple-containers zn-has-17-containers"})
p1_text = politics1_content.text.replace('Abu Dhabi, UAE (CNN)', '')
politics1_lines = p1_text.split('.')
print(politics1_lines[0])

politics2_soup = BeautifulSoup(politics2_request.content, 'html.parser')
politics2_content = politics2_soup.find("section", {"class": "zn zn-body-text zn-body zn--idx-0 zn--ordinary zn-has-multiple-containers zn-has-61-containers"})
p2_text = politics2_content.text
p2_text = politics2_content.text.replace('Erie, Pennsylvania  (CNN)','')
politics2_lines = p2_text.split('.')
print(p2_text)

politics3_soup = BeautifulSoup(politics3_request.content, 'html.parser')
politics3_content = politics3_soup.find("section", {"class": "Article__Content story"})
p3_text = politics3_content.text
politics3_lines = p3_text.split('.')
print(politics3_lines[0])

sports_mix = ""
for i in range(4):
  sports_mix += sports1_lines[i] + '. '
  sports_mix += sports2_lines[i] + '. '
  sports_mix += sports3_lines[i] + '. '

sports_mm = sports_mix.replace("Rafael Nadal", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Daniil Medvedev", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("The Spaniard", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Roger Federer", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Novak Djokovic", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Matteo Berrettini", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Nadal", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Senegal", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Burkina Faso", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Abdou Diallo", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Sadio Mane", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Idrissa Gueye", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Blati Toure", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Issa Kabore", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Edouard Mendy", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Mane", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Farid Ouedraogo", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Charlie Sifford", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Sifford", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Stanley Mosk", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Jackie Robinson", mickey_characters[random.randint(0,len(mickey_characters)-1)])
sports_pf = sports_mix.replace("Rafael Nadal", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Daniil Medvedev", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("The Spaniard", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Roger Federer", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Novak Djokovic", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Matteo Berrettini", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Nadal", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Senegal", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Burkina Faso", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Abdou Diallo", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Sadio Mane", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Idrissa Gueye", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Blati Toure", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Issa Kabore", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Edouard Mendy", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Mane", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Farid Ouedraogo", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Charlie Sifford", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Sifford", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Stanley Mosk", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Jackie Robinson", pf_characters[random.randint(0,len(pf_characters)-1)])
sports_ppg = sports_mix.replace("Rafael Nadal", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Daniil Medvedev", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("The Spaniard", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Roger Federer", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Novak Djokovic", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Matteo Berrettini", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Nadal", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Senegal", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Burkina Faso", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Abdou Diallo", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Sadio Mane", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Idrissa Gueye", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Blati Toure", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Issa Kabore", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Edouard Mendy", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Mane", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Farid Ouedraogo", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Charlie Sifford", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Sifford", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Stanley Mosk", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Jackie Robinson", ppg_characters[random.randint(0,len(ppg_characters)-1)])
sports_simpsons = sports_mix.replace("Rafael Nadal", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Daniil Medvedev", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("The Spaniard", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Roger Federer", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Novak Djokovic", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Matteo Berrettini", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Nadal", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Senegal", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Burkina Faso", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Abdou Diallo", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Sadio Mane", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Idrissa Gueye", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Blati Toure", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Issa Kabore", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Edouard Mendy", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Mane", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Farid Ouedraogo", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Charlie Sifford", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Sifford", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Stanley Mosk", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Jackie Robinson", simpsons_characters[random.randint(0,len(simpsons_characters)-1)])
sports_spongebob = sports_mix.replace("Rafael Nadal", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Daniil Medvedev", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("The Spaniard", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Roger Federer", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Novak Djokovic", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Matteo Berrettini", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Nadal", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Senegal", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Burkina Faso", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Abdou Diallo", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Sadio Mane", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Idrissa Gueye", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Blati Toure", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Issa Kabore", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Edouard Mendy", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Mane", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Farid Ouedraogo", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Charlie Sifford", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Sifford", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Stanley Mosk", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Jackie Robinson", spongebob_characters[random.randint(0,len(spongebob_characters)-1)])

print(sports_mm)

celebs_mix = ""
for i in range(5):
  celebs_mix += celebs1_lines[i] + '. '
  celebs_mix += celebs2_lines[i] + '. '
  celebs_mix += celebs3_lines[i] + '. '

celebs_mm = celebs_mix.replace("Rihanna", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("ASAP Rocky", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Miles Diggs", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Diggzy", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Kim Kardashian", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Kate Moss", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Kylie Jenner", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Beyoncé", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Channing Tatum", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Marvel", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Tatum", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Reid Carolin", mickey_characters[random.randint(0,len(mickey_characters)-1)])
celebs_pf = celebs_mix.replace("Rihanna", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("ASAP Rocky", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Miles Diggs", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Diggzy", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Kim Kardashian", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Kate Moss", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Kylie Jenner", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Beyoncé", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Channing Tatum", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Marvel", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Tatum", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Reid Carolin", pf_characters[random.randint(0,len(pf_characters)-1)])
celebs_ppg = celebs_mix.replace("Rihanna", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("ASAP Rocky", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Miles Diggs", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Diggzy", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Kim Kardashian", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Kate Moss", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Kylie Jenner", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Beyoncé", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Channing Tatum", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Marvel", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Tatum", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Reid Carolin", ppg_characters[random.randint(0,len(ppg_characters)-1)])
celebs_simpsons = celebs_mix.replace("Rihanna", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("ASAP Rocky", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Miles Diggs", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Diggzy", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Kim Kardashian", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Kate Moss", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Kylie Jenner", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Beyoncé", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Channing Tatum", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Marvel", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Tatum", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Reid Carolin", simpsons_characters[random.randint(0,len(simpsons_characters)-1)])
celebs_spongebob = celebs_mix.replace("Rihanna", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("ASAP Rocky", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Miles Diggs", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Diggzy", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Kim Kardashian", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Kate Moss", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Kylie Jenner", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Beyoncé", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Channing Tatum", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Marvel", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Tatum", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Reid Carolin", spongebob_characters[random.randint(0,len(spongebob_characters)-1)])

print(celebs_spongebob)

politics_mix = ""
for i in range(5):
  politics_mix += politics1_lines[i] + '. '
  politics_mix += politics2_lines[i] + '. '
  politics_mix += politics3_lines[i] + '. '

print(politics_mix)

politics_mm = politics_mix.replace("the country", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Emirati", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("the ministry", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Yemen", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Iranian", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Houthi", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("The UAE", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Saudi", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Senate", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("China", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("David McCormick", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Mehmet Oz", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Donald Trump", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("Trump", mickey_characters[random.randint(0,len(mickey_characters)-1)]).replace("conservative judges", mickey_characters[random.randint(0,len(mickey_characters)-1)])
politics_pf = politics_mix.replace("the country", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Emirati", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("the ministry", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Yemen", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Iranian", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Houthi", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("The UAE", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Saudi", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Senate", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("China", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("David McCormick", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Mehmet Oz", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Donald Trump", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("Trump", pf_characters[random.randint(0,len(pf_characters)-1)]).replace("conservative judges", pf_characters[random.randint(0,len(pf_characters)-1)])
politics_ppg = politics_mix.replace("the country", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Emirati", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("the ministry", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Yemen", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Iranian", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Houthi", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("The UAE", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Saudi", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Senate", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("China", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("David McCormick", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Mehmet Oz", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Donald Trump", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("Trump", ppg_characters[random.randint(0,len(ppg_characters)-1)]).replace("conservative judges", ppg_characters[random.randint(0,len(ppg_characters)-1)])
politics_simpsons = politics_mix.replace("the country", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Emirati", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("the ministry", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Yemen", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Iranian", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Houthi", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("The UAE", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Saudi", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Senate", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("China", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("David McCormick", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Mehmet Oz", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Donald Trump", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("Trump", simpsons_characters[random.randint(0,len(simpsons_characters)-1)]).replace("conservative judges", simpsons_characters[random.randint(0,len(simpsons_characters)-1)])
politics_spongebob = politics_mix.replace("the country", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Emirati", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("the ministry", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Yemen", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Iranian", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Houthi", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("The UAE", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Saudi", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Senate", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("China", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("David McCormick", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Mehmet Oz", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Donald Trump", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("Trump", spongebob_characters[random.randint(0,len(spongebob_characters)-1)]).replace("conservative judges", spongebob_characters[random.randint(0,len(spongebob_characters)-1)])

print(politics_pf)

if choice == 1 and choice2 == 1:
  print(sports_mm)
elif choice == 1 and choice2 == 2:
  print(sports_pf)
elif choice == 1 and choice2 == 3:
  print(sports_ppg)
elif choice == 1 and choice2 == 4:
  print(sports_simpsons)
elif choice == 1 and choice2 == 5:
  print(sports_spongebob)
elif choice == 2 and choice2 == 1:
  print(celebs_mm)
elif choice == 2 and choice2 == 2:
  print(celebs_pf)
elif choice == 2 and choice2 == 3:
  print(celebs_ppg)
elif choice == 2 and choice2 == 4:
  print(celebs_simpsons)
elif choice == 2 and choice2 == 5:
  print(celebs_spongebob)
elif choice == 3 and choice2 == 1:
  print(politics_mm)
elif choice == 3 and choice2 == 2:
  print(politics_pf)
elif choice == 3 and choice2 == 3:
  print(politics_ppg)
elif choice == 3 and choice2 == 4:
  print(politics_simpsons)
elif choice == 3 and choice2 == 5:
  print(politics_spongebob)