def calculate_age(year_of_birth, current_year):
    if year_of_birth < current_year:
        x = year_of_birth - current_year
        if x < 1:
            x = x - x - x
            if x == 1:
                x = str(x)
                print("You are " + x + " year old.") 
            else:
                x = str(x)
                print("You are " + x + " years old.")
        else:
            
            print("You were born this very year!")
    elif year_of_birth > current_year:
        birth = year_of_birth - current_year
        if birth == 1:
            birth = str(birth)
            print("You will be born in " + birth + " year."  )
        else:
            birth = str(birth)
            print("You will be born in " + birth + " years." )
    else:
        print("You were born this very year!")


givedbirth = int(input("enter the day you gived birth: "))
now = int(input("enter the number when do you want to know how old you will be: "))
calculate_age(givedbirth, now)