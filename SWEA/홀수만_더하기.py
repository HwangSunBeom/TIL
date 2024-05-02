t = int(input())
 
for test_case in range(1,t+1) :
	li = map(int, input().split())
	answer = 0
	for i in li :
		if i % 2 != 0 :
			answer += i
	print(f"#{test_case} {answer}")