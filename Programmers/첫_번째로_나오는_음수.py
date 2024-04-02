# 첫_번째로_나오는_음수.py

def solution(num_list):
    answer = 0
    for i in num_list :
        if i < 0 :
            return num_list.index(i)
    return -1