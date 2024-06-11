# 문자열 비교하기

# 개쩌는 답안
#   def solution(date1, date2):
#       return int(date1 < date2)

def solution(date1, date2):
    count = 0
    for one, two in list(zip(date1, date2)) :
        if one == two :
            if count == 2 :
                return 0
            count += 1
        else :
            if one > two :
                return 0
            else :
                return 1
            