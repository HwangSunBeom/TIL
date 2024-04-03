# 프로그래머스 레벨 1 김서방의 위치 찾기

def solution(seoul):
    answer = ''
    for index, person in enumerate(seoul) :
        if person == 'Kim' :
            return '김서방은 ' + str(index) + '에 있다'