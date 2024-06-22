# 특정한 문자를 대문자로 바꾸기

def solution(my_string, alp):
    answer = ''
    for str in my_string :
        if str == alp :
            answer += alp.upper()
        else :
            answer += str
    return answer