def simple_calculator(num1, operator, num2):
    if operator == "+":
        print(num1 + num2)
    elif operator == "-":
        print(num1 - num2)
    elif operator == "*":
        print(num1 * num2)
    def check_if0():
        if operator == "/" and num1 != 0 or num2 != 0:
            print(num1 / num2)
        else:
            print('error, cannot be divided by 0')
        
simple_calculator(20, "*", 15)
