from flask import Blueprint, request, jsonify
from Services.Service_Model import Service_Model

# Définir le blueprint pour la route de prédiction
prediction_blueprint = Blueprint('prediction', __name__)

@prediction_blueprint.route('/predict', methods=['POST'])
def predict():
    """
    Route pour prédire les émissions de carbone.ml
    """
    # Récupérer les données de la requête
    input_data = request.json

    # Vérifier que les données sont bien fournies
    if not input_data:
        return jsonify({'message': 'Aucune donnée fournie'}), 400

    try:
        # Appeler le service pour effectuer la prédiction
        prediction = Service_Model().predict_emission(input_data)
        return jsonify({'prediction': prediction}), 200

    except Exception as e:
        return jsonify({'message': str(e)}), 500