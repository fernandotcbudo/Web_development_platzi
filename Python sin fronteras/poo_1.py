class User:
    def __init__(self,name,lastname,age):
        self.name= name
        self.lastname= lastname
        self.age= age

    def hello(self):
       print(f'Welcome {self.name} {self.lastname} , your age is {self.age}')
       return self.name,self.lastname

class Admin(User):
    def superHello(self):
        print(f'Hi i am the admin, my name is {self.name}')
    

if __name__ == '__main__':
    inputUser1= input('What is yout name? ')
    inputUser2= input('What is yout last name? ')
    ageFinal= 20
    user=User(inputUser1,inputUser2,ageFinal)
    user.age= 30
    user_h= user.hello()

    adminF= Admin('Super','Admin',20)
    adminF.superHello()
    adminF.hello()

    



    


