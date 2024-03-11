#배열 조각하기

def solution(arr, query):
    answer = []
    index = 0
    for num in query:
        if index % 2 :
            arr = arr[num:]
        else :
            arr = arr[:num+1]
        index += 1
    return arr