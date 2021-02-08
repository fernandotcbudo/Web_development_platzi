def evenNum(n):
  if n % 2 == 0:
    print('This is an even number')
  else:
    print('This is an odd number')
  return 'Bye...'
  


if __name__ == '__main__':
  n= int(input('Write a number: '))
  print(evenNum(n))
