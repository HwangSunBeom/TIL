def solution(s):
    c_binary, c_zero = 0, 0
    str = s
    while str != '1' :
        c_binary += 1
        c_zero += str.count('0')
        length = len(str) - str.count('0')
        str = bin(length)[2:]
    return [c_binary, c_zero]
