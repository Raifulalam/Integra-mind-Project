
from flask import Flask, request, jsonify
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

client = MongoClient('mongodb://localhost:27017/')
db = client['login_db']
users_collection = db['users']

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'success': False, 'message': 'Email and password are required'}), 400
    
    user = users_collection.find_one({'email': email})
    if user and check_password_hash(user['password'], password):
        return jsonify({'success': True})
    return jsonify({'success': False, 'message': 'Invalid credentials 😞'})

@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.json
    email = data.get('email')
    if not email:
        return jsonify({'success': False, 'message': 'Email is required'}), 400
    
    user = users_collection.find_one({'email': email})
    if user:
        return jsonify({'success': True, 'message': 'Password reset link has been sent to your email.'})
    return jsonify({'success': False, 'message': 'Email not found.'})

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'success': False, 'message': 'Email and password are required'}), 400

    user= users_collection.find_one({'email': email})
    if user:
        return jsonify({'success': False, 'message': 'Email already exists'}), 400

    hashed_password = generate_password_hash("123456")
    users_collection.insert_one({'email': email, 'password': hashed_password})

    return jsonify({'success': True, 'message': 'Registration successful'}), 201

@app.route('/navbar',methods=['GET'])
def get_navbar():
    data=request.json
    username=data.get('username')
    email=data.get('email')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
