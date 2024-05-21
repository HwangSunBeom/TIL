T = int(input())

for test_case in range(1, T+1) :
	N = int(input())
	cost_list = list(map(int, input().split()))
	answer, max = 0, 0
	for cost in cost_list[::-1] :
		if cost >= max :
			max = cost
		else:
			answer += max - cost
	print(f"#{test_case} {answer}")