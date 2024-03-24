
def solution(myString, pat):
    answer = 0
    for index, str in enumerate(myString) :
        if myString[index:index+len(pat)] == pat :
            answer+=1
    return answer