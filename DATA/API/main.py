import os
from flask import Flask
from flask_cors import CORS
from flask import Flask, send_from_directory
from flask_swagger_ui import get_swaggerui_blueprint
from Controllers.Controller_Auth import auth_blueprint
from Controllers.Controller_Model import prediction_blueprint
from Controllers.Controller_Database import database_blueprint

bucket_name = os.getenv('BUCKET_NAME')
file_key = os.getenv('FILE_KEY')

if not bucket_name or not file_key:
    raise ValueError("Les variables d'environnement BUCKET_NAME et FILE_KEY doivent être définies")

app = Flask(__name__)

SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.yaml'
swaggerui_blueprint = get_swaggerui_blueprint(SWAGGER_URL, API_URL)
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

CORS(app, origins=["https://qptdsruxe8.eu-west-3.awsapprunner.com/", "http://localhost:3000"])

app.config['BUCKET_NAME'] = bucket_name
app.config['FILE_KEY'] = file_key

@app.route('/health', methods=['GET'])
def health():
    return {"status": "OK"}, 200

# Gestion des erreurs globales
@app.errorhandler(Exception)
def handle_exception(e):
    return {"error": str(e)}, 500

app.register_blueprint(auth_blueprint)
app.register_blueprint(prediction_blueprint)
app.register_blueprint(database_blueprint)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.getenv("PORT", 5000)), debug=True)

""" from flask import Flask
from Controllers.Controller_Model import prediction_blueprint
from Controllers.Controller_Database import database_blueprint

app = Flask(__name__)

app.register_blueprint(prediction_blueprint)
app.register_blueprint(database_blueprint)

if __name__ == '__main__':  
   app.run(debug=True)   """