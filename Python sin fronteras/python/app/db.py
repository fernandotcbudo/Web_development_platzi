import mysql.connector

midb= mysql.connector.connect(
    host='localhost',
    user='root',
    password='secret',
    database='prueba1'
)
cursor=midb.cursor()

#listar datos
cursor.execute('select * from Usuario')
resultado=cursor.fetchall()
print(resultado)

#insetar datos
#sql= 'insert into Usuario (email,username,edad) values(%s,%s,%s)'
#values=('micorreo@emailx.com','Chanchito feliz',45)

#actualizar datos
#sql='update Usuario set email = %s where id = %s'
#values= ('micorreo@correo.com', 4)
#cursor.execute(sql,values)

#midb.commit()
#print(cursor.rowcount)

#eliminar datos
#sql='delete from Usuario where id = %s'
#values= (5, )
#cursor.execute(sql,values)
#midb.commit()