# 무작위로 K개의 수 뽑기

def solution(arr, k):
    answer = []
    for num in arr :
        if len(answer) < k :
            if num not in answer :
                answer.append(num)
            else :
                continue
        else :
            break
    if len(answer) < k :
        answer += [-1] * (k - len(answer))
    return answer