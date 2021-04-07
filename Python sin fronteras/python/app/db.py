import mysql.connector

midb= mysql.connector.connect(
    host='localhost',
    user='root',
    password='secret',
    database='prueba1'
)
cursor=midb.cursor()

cursor.execute('select * from Usuario')

resultado=cursor.fetchall()

print(resultado)