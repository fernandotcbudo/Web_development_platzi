class User:
    def __init__(self,name,lastname):
        self.name= name
        self.lastname= lastname

    def hello(self):
       print(f'Welcome {self.name} {self.lastname}')
       return self.name,self.lastname


if __name__ == '__main__':
    inputUser1= input('What is yout name? ')
    inputUser2= input('What is yout last name? ')
    user=User(inputUser1,inputUser2)
    user_h= user.hello()

    



    


