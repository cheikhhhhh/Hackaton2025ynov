// Import des modules nécessaires
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Données simulées (exemple)
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

// Routes de l'API

// 1. Récupérer tous les utilisateurs
app.get('/users', (req, res) => {
  res.json(users);
});

// 2. Récupérer un utilisateur par ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
  res.json(user);
});

// 3. Ajouter un nouvel utilisateur
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Le nom et l’email sont obligatoires' });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 4. Mettre à jour un utilisateur
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

// 5. Supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ error: 'Utilisateur non trouvé' });

  users.splice(userIndex, 1);
  res.status(204).send();
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
