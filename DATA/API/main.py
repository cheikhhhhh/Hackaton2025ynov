import os
from flask import Flask
from Controllers.Controller_Model import prediction_blueprint
from Controllers.Controller_Database import database_blueprint

bucket_name = os.getenv('BUCKET_NAME')
file_key = os.getenv('FILE_KEY')

if not bucket_name or not file_key:
    raise ValueError("Les variables d'environnement BUCKET_NAME et FILE_KEY doivent être définies")

app = Flask(__name__)

app.config['BUCKET_NAME'] = bucket_name
app.config['FILE_KEY'] = file_key

app.register_blueprint(prediction_blueprint)
app.register_blueprint(database_blueprint)

if __name__ == '__main__':
    app.run(debug=True)

""" from flask import Flask
from Controllers.Controller_Model import prediction_blueprint
from Controllers.Controller_Database import database_blueprint

app = Flask(__name__)

app.register_blueprint(prediction_blueprint)
app.register_blueprint(database_blueprint)

if __name__ == '__main__':  
   app.run(debug=True)   """