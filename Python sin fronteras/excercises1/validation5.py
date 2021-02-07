class User:

  def __init__(self, age):
    self.age= age


def ageValid(self):
  higher= 18
  if validation >= higher and validation < 100:
    print('You are an adult')
  elif validation < higher and validation > 1:
    print('Sorry you are underage')
  else:
    print('Its not in range')
  return validation


if __name__ == '__main__':
  validation= int(input('What is your age? '))
  user1= User(validation)
  print(ageValid(user1))