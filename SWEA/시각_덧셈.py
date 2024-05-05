
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
	time_table = list(map(int, input().split()))
	sum_hour = 0
	sum_time = 0
	for index, time in enumerate(time_table) :
		if index == 0 or index == 2 :
			sum_hour += time
		else :
			sum_time += time
		if sum_time >= 60 :
			sum_time -= 60
			sum_hour += 1
		if sum_hour > 12 :
			sum_hour -= 12
	print(f"#{test_case} {sum_hour} {sum_time}")