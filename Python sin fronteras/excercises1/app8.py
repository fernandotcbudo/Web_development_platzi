list=[]
print('Write numbers and if you want to stop write "stop"')
while True:
      value=(input('Write a number: '))
      if value == 'stop':
            break
      else:
            try:
              value= int(value)
              list.append(value) 
            except:
              print('No valid')
              exit

def sumNum(list):
  counter= 0
  for n in list:
    counter += n
  return counter

if __name__ == '__main__':
  print(sumNum(list))
