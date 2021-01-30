def myArgument(**kwargs):
    print(kwargs['name'], kwargs['lastname'])

def concNames(list):
    i=''
    for el in list:
        i= i+el+' '
    return i
    

if __name__ == '__main__':
    arguName= input('Write your name: ')    
    arguLastName= input('Write your lastname: ')
    argFinal= myArgument(name=arguName,lastname=arguLastName)
    Final= concNames([arguName,arguLastName])
    print(Final)