from flask import Flask, request, jsonify, render_template
import os, psycopg2

app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(
        host='localhost',
        database='pinball',
        user=os.environ['DB_USERNAME'],
        password=os.environ['DB_PASSWORD'],
    )
    return conn

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    fname = request.form['fname']
    lname = request.form['lname']
    nickname = request.form['nickname']
    email = request.form['email']
    phone = request.form['phone']
    # connect to postgres db and insert data to players table

    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute('INSERT INTO players (firstname, lastname, nickname, email, phone)'
                'VALUES(%s, %s, %s, %s, %s)',
                (fname,
                lname,
                nickname,
                email,
                phone)
    )

    conn.cmmit()
    cur.close()
    conn.close()
    
    return render_template('formAccepted.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)