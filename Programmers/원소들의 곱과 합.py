def solution(num_list):
    x, y = 0, 1
    for i in num_list :
        x += i
        y *= i
    if (x * x) > y :
        return 1
    else :
        return 0
        
    