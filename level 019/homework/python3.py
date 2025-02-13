x = ""

for i in range(20):
    x = "odd"
    i = str(i)
    print(i + " " + x)
    x = "even"
    i = int(i)
    i = i + 1
    i = str(i)
    print(i + " " + x)
    i = int(i)
