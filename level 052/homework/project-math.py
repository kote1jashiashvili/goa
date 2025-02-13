def calculator():
    users_calculator = input("enter what you want to do with math (multiply, divide, minus, plus) : ")
    def multiply():
        if users_calculator == "multiply":
            user_num = int(input("enter number : "))
            user_num2 = int(input("enter number : "))
            print("the answer of multiply is this : ")
            print(user_num * user_num2)
    multiply()

    def divide():
        if users_calculator == "divide":
            user_num = int(input("enter number : "))
            user_num2 = int(input("enter number : "))
            print("the answer of divide is this : ")
            print(user_num / user_num2)
    divide()

    def minus():
        if users_calculator == "minus":
            user_num = int(input("enter number : "))
            user_num2 = int(input("enter number : "))
            print("the answer of minus is this : ")
            print(user_num - user_num2)
    minus()

    def plus():
        if users_calculator == "plus":
            user_num = int(input("enter number : "))
            user_num2 = int(input("enter number : "))
            print("the answer of plus is this : ")
            print(user_num + user_num2)
    plus()
calculator()