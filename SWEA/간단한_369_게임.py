N = int(input())
num_list = []
for num in range(1, N+1) :
	a = num//100
	b = (num%100) // 10
	c = (num%10)
	count = sum((a%3==0 and a != 0, b%3==0 and b != 0, c%3==0 and c != 0))
	if count == 3 :
		num_list.append('---')
	elif count == 2 :
		num_list.append('--')
	elif count == 1 :
		num_list.append('-')
	else :
		num_list.append(str(num))
print(' '.join(num_list))