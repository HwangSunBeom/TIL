# 프로그래머스 기능개발

import math

def solution(progresses, speeds):
    answer = []
    point = math.ceil((100 - progresses[0]) / speeds[0])
    temp = {point : 0}
    for index, prog in enumerate(progresses) :
        day = math.ceil((100 - prog) / speeds[index])
        if day <= point :
            temp[point] += 1
        elif day in temp :
            temp[day] += 1
        else :
            point = day
            temp[day] = 1
    return [x for x in temp.values()]