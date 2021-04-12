from flask import Flask, request
app= Flask(__name__)

@app.route('/')
def index():
    return 'Helloooooo world'

@app.route('/menu1',methods=['GET','POST'])
def menu1():
    return 'Menu 1'
@app.route('/menu2')
def menu2():
    return 'Menu 2'