# A 강조하기

def solution(myString):
    answer = ''
    for str in myString :
        if str == 'a' :
            answer += str.upper()
        elif str == 'A' :
            answer += str
        else :
            answer += str.lower()
    return answer