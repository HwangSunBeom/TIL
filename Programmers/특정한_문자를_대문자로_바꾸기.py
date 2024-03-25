def solution(my_string, alp):
    answer = ''
    for str in my_string :
        if str == alp :
            answer += alp.upper()
        else :
            answer += str
    return answer