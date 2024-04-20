# 공백으로 구분하기 2

def solution(my_string):
    answer = []
    temp = my_string.split(' ')
    for str in temp :
        if str == '' :
            continue
        else :
            answer.append(str.replace(' ', ''))
    return answer