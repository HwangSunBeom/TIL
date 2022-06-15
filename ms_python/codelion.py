from distutils.log import info
import random
import time

# List
# print(random.choice(["된찌", "피자", "제육볶음", "치킨", "떡볶이"]))

# for 문
# for x in range(30):
#     print(random.choice(["된찌", "피자", "제육볶음", "치킨", "떡볶이"]))

# 들여쓰기
# for x in range(30):
#     print(random.choice(["된찌", "피자", "제육볶음", "치킨", "떡볶이"]))
# print("이 문장도 반복되나?")

# 들여쓰기 2
# for x in range(30):
#     print(random.choice(["된찌", "피자", "제육볶음", "치킨", "떡볶이"]))
#     print("이 문장도 반복되나?")

# while 문
# while True:
#     break
#     print(random.choice(["된찌", "피자", "제육볶음", "치킨", "떡볶이"]))
#     time.sleep(1)

# 변수 선언
# lunch = random.choice(["된찌", "피자", "제육볶음", "치킨", "떡볶이"])
# dinner = random.choice(["김밥", "쫄면", "돈까스"])
# print(lunch)
# print(dinner)

# Dictionary
# information = {"고향":"수원", "취미":"영화관람", "좋아하는음식":"국수"}
# print(information)
# print(information.get("취미"))
# person = {"특기":"피아노", "거주지":"서울"}
# print(person.get("특기"), person.get("거주지"))

# List & Dictionary
# information = {"고향":"수원", "취미":"영화관람", "좋아하는음식":"국수"}
# foods = ["된찌", "피자", "제육볶음", "치킨", "떡볶이"]
# information["특기"] = "피아노"
# information["사는곳"] = "서울"
# print(information)
# del information["좋아하는음식"]
# print(information)
# print(len(information))
# information.clear()
# print(information)
# print(foods[0])
# print(foods[-1])
# foods.append("김밥")
# print(foods)
# del foods[1]
# print(foods)

for x in range(30):
    print(x)

foods = ["된찌", "피자", "제육볶음", "치킨", "떡볶이"]
for x in range(len(foods)):
    print(foods[x])
for x in foods:
    print(x)
information = {"고향":"수원", "취미":"영화관람", "좋아하는음식":"국수"}
for x, y in information.items():
    print(x)
    print(y)