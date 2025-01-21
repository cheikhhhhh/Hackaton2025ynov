from flask import Blueprint, request, jsonify
from Services.AuthService import authenticate_user

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = authenticate_user(username, password)

    if user:
        return jsonify({"message": "Connexion réussie", "user": user}), 200
    else:
        return jsonify({"error": "Nom d'utilisateur ou mot de passe incorrect"}), 401
