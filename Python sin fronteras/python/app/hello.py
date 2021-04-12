from flask import Flask, request, url_for
app= Flask(__name__)

@app.route('/')
def index():
    return 'Helloooooo world'

@app.route('/menu1/<post1>',methods=['GET','POST'])
def menu1(post1):
    if request.method == 'GET':
            return 'El id del post es: ' + post1
    else:
        return 'Este es otro metodo '

@app.route('/menu2', methods=['POST'])
def menu2():
    print(url_for('index',post1=2))
    print(request.form)
    return 'Menu 2'