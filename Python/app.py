from flask import Flask, render_template, request, redirect, url_for, session, jsonify, flash,  render_template, Response
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import pymssql
import pandas as pd
from bson import json_util
import json

import psycopg2 #pip install psycopg2 
import psycopg2.extras

app = Flask(__name__)

app.secret_key = 'xyzsdfg'

def connection():
    conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS',user='franzetti.giulio', password='WWWWS7sN', database='franzetti.giulio')

    return conn


mysql = MySQL(app)
CORS(app)

@app.route('/')
def index():
    return "Ciao"

@app.route('/exams')
def exams():
    # Create a connection
    conn = connection()
    # Create a cursor
    cur = conn.cursor(as_dict=True)
    # Execute the SQL SELECT statement
    cur.execute("SELECT * FROM Progetto.verifica")
    # Fetch all rows from the SELECT statement
    list_users = cur.fetchall()
    # Render the index.html template and pass the list of students
    #return render_template('hehe.html', list_users = list_users)

    return jsonify (list_users)
    resp = jsonify(list_users)
    #return json.dumps(list_users)
    resp = json_util.dumps(list_users)
    return Response(resp, mimetype = 'application/json')