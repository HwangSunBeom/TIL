def solution(left, right):
    answer = 0
    for i in range(left, right + 1) :
        temp = []
        for num in range(1, i) :
            if i % num == 0 :
                temp.append(num)
        if len(temp) % 2 :
            answer += i
        else :
            answer -= i
    return answer