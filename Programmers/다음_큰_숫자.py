def solution(n):
    count = bin(n).count('1')
    
    next = n + 1
    while True:
        if bin(next).count('1') == count:
            return next
        next += 1