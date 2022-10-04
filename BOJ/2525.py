# from datetime import datetime

# now = datetime.now()

# a = now.hour
# b = now.minute

b, a = input().split()
a = int(a)
b = int(b)

c = int(input())

a = a+c

if a>=60 :
    x = a / 60
    a = a%60
    b = b+x
    if b >= 24 :
        y = b / 24
        b = b%24

print( b, a )