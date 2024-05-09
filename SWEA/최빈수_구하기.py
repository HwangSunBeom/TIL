T = int(input())

for test_case in range(1, T + 1):
	_ = int(input())
	num_list = list(map(int, input().split()))
	count = [0] * 101
	for num in num_list :
		count[num] += 1
	most_fre = 0
	most_num = 0
	for i, fre in enumerate(count) :
		if most_fre <= fre :
			most_fre = fre
			most_num = i
	print(f"#{test_case} {most_num}")