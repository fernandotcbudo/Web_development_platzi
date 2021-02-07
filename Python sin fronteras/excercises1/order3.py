def orderList(list):
  initial=0
  for e in list:
    if initial == 0:
      initial= e
    else:
      initial = e if e < initial else initial
  return initial

if __name__ == '__main__':
  print(f'The minor number of the list is: {orderList([1,2,3,4,5,6,7,-13,20,-2])}')