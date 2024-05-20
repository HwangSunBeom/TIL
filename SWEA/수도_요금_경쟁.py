# 수도 요금 경쟁

T = int(input())
for test_case in range(1, T + 1):
    P, Q, R, S, W = map(int, input().split())
    A_cost = W * P
    if W > R:
        B_cost = Q + ((W - R) * S)
    else:
        B_cost = Q

    answer = min(A_cost, B_cost)
    print(f"#{test_case} {answer}")