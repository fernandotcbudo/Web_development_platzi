from flask import Flask, request, url_for, redirect, abort, render_template
app= Flask(__name__)

#importando mysql
import mysql.connector


midb= mysql.connector.connect(
    host='localhost',
    user='root',
    password='secret',
    database='prueba1'
)

cursor= midb.cursor(dictionary=True)

#ruta raiz
@app.route('/')
def index():
    return 'Helloooooo world'

#ruta 1
@app.route('/post/<post1>',methods=['GET','POST'])
def menu1(post1):
    if request.method == 'GET':
            return 'El id del post es: ' + post1
    else:
        return 'Este es otro metodo '

#ruta 2
@app.route('/menu2', methods=['POST','GET'])
def menu2():
    cursor.execute('select * from Usuario')
    usuarios= cursor.fetchall()
    #return redirect(url_for('menu1',post1=2))
    #print(request.form['llave1'])
    #return render_template('menu2.html')
    #return {
        #"username":'blablalbla',
        #"email":'blelblelbe'
    #}
    return render_template('menu2.html',usuarios=usuarios)

#ruta 3
@app.route('/home', methods=['GET'])
def home():
    return render_template('home.html', mensa='Esta es una prueba para extener plantillas' )