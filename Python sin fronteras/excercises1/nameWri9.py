def append(name,lastname):
      c= open('fullname.txt','a')
      c.write(name + ' '+ lastname + '\n' )
      c.close()


if __name__ == '__main__':
  name= input('Write your name: ')
  lastname= input('Write your lastname: ')
  append(name,lastname)