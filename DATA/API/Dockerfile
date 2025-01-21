# Utiliser une image de base Python
FROM python:3.9-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers requirements pour installer les dépendances
COPY requirements.txt requirements.txt

# Installer les dépendances nécessaires
RUN pip install --no-cache-dir -r requirements.txt

# Copier tout le contenu de l'application dans le répertoire de travail
COPY . .

# Exposer le port utilisé par Flask (par défaut : 5000)
EXPOSE 5000

# Commande pour lancer l'application Flask
CMD ["python", "main.py"]
