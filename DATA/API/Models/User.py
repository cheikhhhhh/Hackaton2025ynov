from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'utilisateurs'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    carbon_emission = db.Column(db.Float, nullable=True)

    def __init__(self, username, password, carbon_emission=None):
        self.username = username
        self.password = generate_password_hash(password)
        self.carbon_emission = carbon_emission