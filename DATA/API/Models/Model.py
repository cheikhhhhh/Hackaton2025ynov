import os
import pandas as pd
import boto3
from io import StringIO
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

class CarbonEmissionModel:
    def __init__(self, bucket_name, file_key, region_name='eu-west-3'):

        bucket_name = os.getenv('BUCKET_NAME')
        file_key = os.getenv('FILE_KEY')

        if not bucket_name or not file_key:
            raise ValueError("Les variables d'environnement BUCKET_NAME et FILE_KEY doivent être définies")
        
        # Connexion à S3 via Instance Role
        s3 = boto3.client('s3', region_name=region_name)

        # Téléchargement des données depuis S3
        response = s3.get_object(Bucket=bucket_name, Key=file_key)
        data = pd.read_csv(StringIO(response['Body'].read().decode('utf-8')))

        # Charger les données en local
        ## data = pd.read_csv('./Carbon_Emission_Cleaned.csv')

        # Définir les colonnes pertinentes
        features = [
            'Body Type', 'Sex', 'Diet', 'Vehicle Type', 'Monthly Grocery Bill',
            'Frequency of Traveling by Air', 'Vehicle Monthly Distance Km',
            'Waste Bag Size', 'Waste Bag Weekly Count', 'How Long TV PC Daily Hour',
            'How Many New Clothes Monthly', 'How Long Internet Daily Hour',
            'Energy efficiency'
        ]
        target = 'CarbonEmission'

        # Séparer les données en X (caractéristiques) et y (cible)
        X = data[features]
        y = data[target]

        # Diviser en ensembles d'entraînement et de test
        X_train, _, y_train, _ = train_test_split(X, y, test_size=0.2, random_state=42)

        # Transformer les colonnes catégorielles et numériques
        categorical_features = X.select_dtypes(include=['object']).columns
        numerical_features = X.select_dtypes(include=['int64', 'float64']).columns

        preprocessor = ColumnTransformer(
            transformers=[
                ('num', StandardScaler(), numerical_features),
                ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
            ]
        )

        # Construire le pipeline
        self.model = Pipeline(steps=[
            ('preprocessor', preprocessor),
            ('regressor', RandomForestRegressor(random_state=42))
        ])

        # Entraîner le modèle
        self.model.fit(X_train, y_train)

    def predict(self, input_data):
        """
        Prédit les émissions de carbone pour les données utilisateur.

        Args:
            input_data (dict): Caractéristiques sous forme de dictionnaire.
        
        Returns:
            float: Prédiction des émissions de carbone.
        """
        print('predict')
        input_df = pd.DataFrame([input_data])
        return self.model.predict(input_df)[0]