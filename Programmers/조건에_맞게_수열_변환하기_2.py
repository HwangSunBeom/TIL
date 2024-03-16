def solution(arr):
    answer = 0
    prev = arr
    while True :
        temp = []
        for index, num in enumerate(prev) :
            if num >= 50 and num % 2 == 0 :
                temp.append(num/2)
            elif num < 50 and num % 2 :
                temp.append(num*2 + 1)
            else :
                temp.append(num)
        if temp == prev :
            return answera
        else :
            prev = temp
            answer += 1
