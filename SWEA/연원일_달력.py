T = int(input())
for test_case in range(1, T + 1):
	array = input()
	year = array[0:4]
	month = array[4:6]
	day = array[6:8]
	if int(month) > 12 or int(month) == 0 :
		print("#{} {}".format(test_case, -1))
		continue
	elif int(day) > 31 or int(day) == 0 :
		print("#{} {}".format(test_case, -1))
		continue
	elif int(month) == 2 and int(day) > 28 :
		print("#{} {}".format(test_case, -1))
		continue
	elif int(month) in (4, 6, 9, 11) and int(day) > 30 :
		print("#{} {}".format(test_case, -1))
		continue
	print("#{} {}/{}/{}".format(test_case, year, month, day))