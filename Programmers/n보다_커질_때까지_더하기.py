# n보다 커질때까지 더하기

def solution(numbers, n):
    answer = 0
    for number in numbers :
        answer += number
        if answer > n :
            return answer