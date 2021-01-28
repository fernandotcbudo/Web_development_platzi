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
    firstNum= input('Write the first number: ')
    result=''
    try:
        firstNum= int(firstNum)

    except:
        firstNum= 'Is not a number'

    if firstNum == 'Is not a number':
        print('Sorry is not a number')
        exit()

    secondNum= input('Write the second number: ')
    try:
        secondNum= int(secondNum)

    except:
        secondNum= 'Is not a number'

    if secondNum == 'Is not a number':
        print('Sorry is not a number')
        exit()

    result= print(f'The result is {firstNum+secondNum}')

    return result

 

def Subs_calculator():
    firstNum= input('Write the first number: ')
    result=''
    try:
        firstNum= int(firstNum)

    except:
        firstNum= 'Is not a number'

    if firstNum == 'Is not a number':
        print('Sorry is not a number')
        exit()

    secondNum= input('Write the second number: ')
    try:
        secondNum= int(secondNum)

    except:
        secondNum= 'Is not a number'

    if secondNum == 'Is not a number':
        print('Sorry is not a number')
        exit()

    result= print(f'The result is {firstNum-secondNum}')

    return result

if __name__ == "__main__":
    main()


