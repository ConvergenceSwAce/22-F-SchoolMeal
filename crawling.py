from bs4 import BeautifulSoup
import urllib.request
import urllib.parse

web_url = "https://www.mju.ac.kr/diet/mjukr/10/view.do"
with urllib.request.urlopen(web_url) as response:

    html = response.read()
    soup = BeautifulSoup(html, "html.parser")
    # tr 태그 find
    tr = soup.find_all("tr")

    date = []
    day = []
    temp_lunch = []
    temp_dinner = []
    lunch = []
    dinner = []

    # 중식
    for i in tr[1::2]:
        i = list(i)
        for j in i[1::2]:
            for k in j:
                temp_lunch.append(str(k).strip())
    # 석식
    for i in tr[2::2]:
        i = list(i)
        temp_dinner.append(list(i[3]))

    # date 추가
    for i in temp_lunch[::5]:
        date.append(i)

    # day 추가
    for i in temp_lunch[2::5]:
        day.append(i[2])

    # lunch 추가
    for i in temp_lunch[4::5]:
        lunch.append(i)

    # dinner 추가
    for i in temp_dinner:
        dinner.append(i[0])

    print(date)
    print(day)
    print(lunch)
    print(dinner)
