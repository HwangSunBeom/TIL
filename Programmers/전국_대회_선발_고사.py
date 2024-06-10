def solution(rank, attendance):
    answer = 0
    temp = [[item[0], index] for index, item in enumerate(list(zip(rank, attendance))) if item[1]]
    temp.sort()
    return (temp[0][1] * 10000) + (temp[1][1] * 100) + (temp[2][1])