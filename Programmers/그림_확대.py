# 그림 확대

# 이쁜 코드
# def solution(picture, k):
#     answer = []
#     for i in range(len(picture)):
#         for _ in range(k):
#             answer.append(picture[i].replace('.', '.' * k).replace('x', 'x' * k))
#     return answer

def solution(picture, k):
    answer = []
    for row in picture :
        temp = []
        for i, point in enumerate(row) :
            temp += point * k
        for _ in range(k) :
            answer.append(''.join(temp))
    return answer