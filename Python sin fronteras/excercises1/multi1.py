def sumMult(num1,num2):
    result=0
    for x in range(num1):
        result += num2
    return result


if __name__=='__main__':
    print('This is a rare calculator')
    numf1= int(input('Write your first number: '))
    numf2= int(input('Write your second number: '))
    print(sumMult(numf1,numf2))
 
