# 간단한 소인수분해

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
	num = int(input())
	li= [0, 0, 0, 0, 0]
	while(num != 1) :
		if num % 2 == 0 :
			li[0] += 1
			num /= 2
		elif num % 3 == 0 :
			li[1] += 1
			num /= 3
		elif num % 5 == 0 :
			li[2] += 1
			num /= 5
		elif num % 7 == 0 :
			li[3] += 1
			num /= 7
		elif num % 11 == 0 :
			li[4] += 1
			num /= 11
	print(f"#{test_case} {li[0]} {li[1]} {li[2]} {li[3]} {li[4]}")
            
