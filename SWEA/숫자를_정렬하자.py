# 숫자를 정렬하자

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
	N = int(input())
	num_list = list(map(int, input().split()))
	num_list.sort()
	
	print(f"#{test_case}", end=' ')
	print(" ".join(map(str, num_list)))
    
