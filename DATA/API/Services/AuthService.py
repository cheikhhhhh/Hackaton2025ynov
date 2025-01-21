from Models.User import User
from werkzeug.security import check_password_hash

def authenticate_user(username, password):
    try:
        user = User.query.filter_by(username=username).first()

        if not user:
            return None

        if check_password_hash(user.password, password):
            return {
                "id": user.id,
                "username": user.username
            }

        return None
    except Exception as e:
        raise Exception(f"Erreur lors de l'authentification : {str(e)}")
