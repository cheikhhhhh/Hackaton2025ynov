# Utilise l'image de base Python 3.9 en version slim pour réduire la taille de l'image
FROM python:3.9-slim

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie tous les fichiers du répertoire actuel vers le répertoire de travail dans le conteneur
COPY . .

# Installe les dépendances listées dans le fichier requirements.txt
RUN pip install -r requirements.txt

# Expose le port 8082 pour les connexions entrantes
EXPOSE 8082

# Définit la commande par défaut pour démarrer l'application
CMD ["python", "main.py"]
