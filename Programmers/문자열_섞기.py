# 문자열 섞기

def solution(str1, str2):
    answer = ''
    j, k = 0, 0
    for i in range(len(str1) + len(str2)) :
        if i%2 == 0 :
            answer += str1[j]
            j += 1
        else :
            answer += str2[k]
            k += 1
    return answer