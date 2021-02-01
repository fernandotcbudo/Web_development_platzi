class User:
   def __init__(self,name,lastname):
    self.name= name
    self.lastname= lastname

if __name__ == '__main__':
    inputUser1= input('What is yout name? ')
    inputUser2= input('What is yout last name? ')
    user=User(inputUser1,inputUser2)

    print(user.name,user.lastname)

    


