def solution(n):
    answer = 0
    if n % 2:
        for x in range(1, n+1, 2):
            answer += x
    else:
        for x in range(2, n+1, 2):
            answer += x**2
    return answer