T = int(input())
grade = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0']

for test_case in range(1, T+1) :
	N, K = map(int, input().split())
	students = [list(map(int, input().split())) for _ in range(N)]
	result_list = [ [(student[0] * 0.35) + (student[1] * 0.45) + (student[2] * 0.2), i] for i, student in enumerate(students) ]
	result_list.sort()
	for index, result in enumerate(result_list[::-1]) : 
		if result[1] == K - 1 :
			print(f"#{test_case} {grade[index//(N//10)]}")