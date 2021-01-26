# Sum & substract calculator 

def main():
    welcome= int(input('Please type 1 if you want to sum or 2 if you want to substract: '))
    if welcome == 1:
        Sum_calculator()
    elif welcome == 2:
        Subs_calculator()
    else:
        print('Is not an option')

def Sum_calculator():
    firstNum= int(input('Write the first number: '))
    secondNum= int(input('Write the second number: '))
    result= print(f'The result is {firstNum+secondNum}')
    return result

def Subs_calculator():
    firstNum= int(input('Write the first number: '))
    secondNum= int(input('Write the second number: '))
    result= print(f'The result is {firstNum-secondNum}')
    return result

if __name__ == "__main__":
    main()


