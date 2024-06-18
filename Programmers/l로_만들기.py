def solution(myString) :
    answer = [ i if ord(i)-ord('l')>0 else 'l' for i in myString]
    return ''.join(answer)