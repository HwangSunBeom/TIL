# 프로그래머스 비기너 1번 문제

def solution(s):
    answer = ''
    for index, str in enumerate(s) :
        if index == 0 :
            answer += str.upper()
        elif s[index-1] == ' ' :
            answer += str.upper()
        else :
            answer += str.lower()
    return answer