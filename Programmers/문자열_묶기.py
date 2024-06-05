def solution(strArr):
    answer = 0
    count = [0] * 31
    for str in strArr :
        count[len(str)] += 1 
    return max(count)