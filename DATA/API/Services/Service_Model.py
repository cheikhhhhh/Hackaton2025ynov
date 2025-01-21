from Models.Model import CarbonEmissionModel

class Service_Model:
    def __init__(self):
        pass

    def predict_emission(self, input_data):
        """
        Appelle le modèle pour prédire les émissions de carbone.

        Args:
            input_data (dict): Données fournies par l'utilisateur.

        Returns:
            float: Prédiction des émissions de carbone.
        """
        # Utiliser le modèle pour faire une prédiction
        prediction = CarbonEmissionModel().predict(input_data)

        return prediction