name = input("enter your name: ")
age = int(input("enter your age: "))
workdays = int(input("enter the days you work (0-7): "))
kilometer = int(input("enter how many kilometer you need to go to work: "))

if age < 16:
    print("please, ask your parent for letting you travel")
    done = input("is parent here? (y/n): ")
    parent_choise = input("please sign your name here: ")
    print("sign done, your child can travel")


if kilometer <= 5 and kilometer >= 0:
    print("we recomend you to use cycling")
elif kilometer > 5 and kilometer < 20:
    print("we recoment you to use car")
elif kilometer >= 20:
    print("we recoment you to use train")

if workdays >= 5:
    print("We need to get your benefits on transport.")
