def solution(s):
    answer = ''
    # count = 0
    for index, str in enumerate(s) :
        if index == 0 :
            answer += str.upper()
        elif s[index-1] == ' ' :
            answer += str.upper()
        else :
            answer += str.lower()
    return answer