from flask import Blueprint, request, jsonify
from Services.Service_Model import Service_Model

question_blueprint = Blueprint('question', __name__)

@question_blueprint.route('/question', methods=['POST'])
def test():

    question = request.json['question']

    try:
        reponse = Service_Model().test(question)
    except Exception as e:
        return jsonify({'message': str(e)}), 500
    
    return jsonify(reponse)