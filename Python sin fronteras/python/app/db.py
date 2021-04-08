import mysql.connector

midb= mysql.connector.connect(
    host='localhost',
    user='root',
    password='secret',
    database='prueba1'
)
cursor=midb.cursor()

#cursor.execute('select * from Usuario')
sql= 'insert into Usuario (email,username,edad) values(%s,%s,%s)'
values=('micorreo@emailx.com','Chanchito feliz',45)

cursor.execute(sql,values)

midb.commit()

#resultado=cursor.fetchall()

print(cursor.rowcount)