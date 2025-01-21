# Utiliser une image Python légère
FROM python:3.9-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY . .

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Exposer le port Flask
EXPOSE 5000

# Utiliser Gunicorn comme serveur WSGI
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "main:app"]