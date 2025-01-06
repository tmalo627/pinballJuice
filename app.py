from flask import Flask, request, redirect, url_for, render_template_string
import psycopg2

app = Flask(__name__)

# Database connection
conn = psycopg2.connect(
    host="localhost",
    database="pinball",
    user="postgres",
    password="yourdbpassword"
)
cursor = conn.cursor()

@app.route('/')
def index():
    return render_template_string('''<html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Submit Form</title> </head> <body> <form action="/submit" method="post"> <label for="name">Name:</label> <input type="text" id="name" name="name" required> <br> <label for="email">Email:</label> <input type="email" id="email" name="email" required> <br> <button type="submit">Submit</button> </form> </body> </html>''')

@app.route('/submit', methods=['POST']) def submit_form(): name = request.form['name'] email = request.form['email']'''
)

@app.route('/submit', methods=['POST']) def submit_form(): name = request.form['name'] email = request.form['email']