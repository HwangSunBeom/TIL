# JadenCase 문자열 만들기

def solution(s):
    answer = ''
    for i, str in enumerate(s) :
        if i == 0 or (i != 0 and s[i-1]== ' ') :
            answer += str.upper()
        else :
            answer += str.lower()
    return answer