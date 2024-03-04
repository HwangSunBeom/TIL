def solution(arr, intervals):
    list_a = arr[intervals[0][0]:intervals[0][1]+1]
    list_b = arr[intervals[1][0]:intervals[1][1]+1]
    return list_a + list_b