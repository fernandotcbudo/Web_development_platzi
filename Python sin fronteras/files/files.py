c= open('test.txt','a')

c.writelines('\nNew line')

c.close()

x= open('test.txt')

print(x.read())