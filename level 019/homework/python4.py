usernum = input("enter your number:")
mynum = input("computers guess: ")
while usernum != mynum:
    print("wrong, try again")
    mynum = input("computers guess:")
else:
    print("computer guessed!")