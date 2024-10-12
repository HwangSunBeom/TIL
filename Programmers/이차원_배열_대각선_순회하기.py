def solution(board, k):
    answer = 0
    for row in range(len(board)) :
        for col in range(len(board[row])) :
            if row + col <= k :
                answer += board[row][col]
    return answer