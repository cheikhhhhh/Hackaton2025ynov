from flask import Blueprint, request, jsonify
from Services.Service_Database import Service_Database

database_blueprint = Blueprint('example_database', __name__)

@database_blueprint.route('/example_database', methods=['POST'])
def recuperer_list_utilisateur_example():
    try:
        db = Service_Database()
        data = db.recuperer_list_utilisateur_example()

        return jsonify({'message': data}), 200
    
    except Exception as e:
        return jsonify({'message': str(e)}), 500