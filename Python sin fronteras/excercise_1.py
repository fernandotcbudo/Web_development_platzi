list=['perro','gato','chancho','pera']

def verifyList():
    if list.count(user) > 0:
        print(f'Its right your word is: {user}')

    else:
        print(f'Sorry :(, your word {user} is wrong')

    return user

if __name__ == "__main__":
    user= input('Write your word: ')
    verifyList()
