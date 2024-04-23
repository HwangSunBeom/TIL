def solution(arr):
    stk = []
    i = 0
    for index, num in enumerate(arr) :
        if i < len(arr) :
            if len(stk) == 0 :
                stk.append(num)
                i += 1
            elif len(stk) and stk[-1] == num :
                stk.pop()
                i += 1
            elif len(stk) and stk[-1] != num :
                stk.append(num)
                i += 1
        else :
            continue
    return stk or [-1]