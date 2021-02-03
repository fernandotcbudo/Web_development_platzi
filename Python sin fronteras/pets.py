class Animal:
    def __init__(self,name,sound):
        self.name=name
        self.sound=sound
    def hello(self):
        print(f'Hi im a {self.typeA} my sound is {self.sound} and my name is {self.name}')


class Cat(Animal):
    typeA='Cat'
    def __init__(self,name,sound):
        Animal.__init__(self,name,sound)
        print('Yes im a cat')

class Dog(Animal): 
    typeA='Dog'
    def __init__(self,name,sound):
        super().__init__(name,sound)
        print('Yes im a dog')
class Bird(Animal):
    typeA='Canary'


if __name__ == '__main__':
    cat1= Cat('Fluffly','Miau')
    cat1.hello()
    dog1= Dog('Firulais','Wouff')
    dog1.hello() 
    bird1= Bird('Piolin','Wiiiii')
    bird1.hello()     