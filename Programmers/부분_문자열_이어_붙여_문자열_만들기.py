# 부분 문자열 이어 붙여 문자열 만들기

def solution(my_strings, parts):
    answer = ''
    count = 0
    for a, b in parts :
        answer += str(my_strings[count][a:b+1])
        count += 1
    return answer