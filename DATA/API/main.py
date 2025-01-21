from flask import Flask
from Controllers.Controller_Model import prediction_blueprint
from Controllers.Controller_Database import database_blueprint

app = Flask(__name__)

app.register_blueprint(prediction_blueprint)
app.register_blueprint(database_blueprint)

if __name__ == '__main__':  
   app.run(debug=True)  