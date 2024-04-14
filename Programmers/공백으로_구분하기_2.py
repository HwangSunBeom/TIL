def solution(my_string):
    answer = []
    temp = my_string.split(' ')
    for str in temp :
        if str == '' :
            continue
        else :
            answer.append(str.replace(' ', ''))
    return answer