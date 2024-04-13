# 주사위 게임 3

def solution(a, b, c, d):
    answer = 0
    dice = [a, b, c, d]
    count = {x : dice.count(x) for x in dice  }
    if len(count) == 1 :
        return a * 1111
    elif count.values() == 3 :
        for key, value in count.items() :
            if value = 3 :
                p = key
            else :
                q = key
        return 
    return answer