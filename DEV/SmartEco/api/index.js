const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/Swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/*mongoose.connect('mongodb://localhost:27017/yourdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));*/

import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
import pkg from "pg";
const { Pool } = pkg;

// Paramètres "manuels" pour host, port, db
const DB_HOST = "database-smarteco.cluster-ctm0qxufzcly.eu-west-3.rds.amazonaws.com";
const DB_PORT = 5432;
const DB_NAME = "database-smarteco";

// Nom du secret et région
const SECRET_NAME = "rds!cluster-7ad6ee45-cb3d-4564-a395-9a04a6df5a74";
const REGION = "eu-west-3";

async function getUsernameAndPassword() {
  const client = new SecretsManagerClient({ region: REGION });
  try {
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: SECRET_NAME,
        VersionStage: "AWSCURRENT",
      })
    );
    
    const { username, password } = JSON.parse(response.SecretString);
    return { username, password };
  } catch (err) {
    console.error("Erreur lors de la récupération du secret :", err);
    throw err;
  }
}

export async function createPool() {
  // Récupère username + password depuis Secrets Manager
  const { username, password } = await getUsernameAndPassword();

  // Initialise le pool PostgreSQL avec host, port, database codés en dur (ou via process.env)
  const pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: username,
    password: password,
    // ssl: { rejectUnauthorized: false }, // si nécessaire
  });
  
  return pool;
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const userRoutes = require('./route/USER');
app.use('/USER', USER);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});


















/*const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const compression = require("compression");
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
require("dotenv").config();

const app = express();
const announceRoute = require("./route/announce");
const userRoute = require("./route/USER");
const messageRoute = require("./route/message");

app.use(express.json());
app.use(compression());
app.use(cors());
app.use(limiter);

const uri =
  process.env.MONGO_URI ||
  "mongodb+srv://amadouelcapotoure:Z73oICrr7TAzBz5W@cluster0.bgpse7b.mongodb.net/the_nest_db";
const port = process.env.PORT || 80;

app.use("/api", announceRoute, userRoute, messageRoute);
app.get("/", (req, res) => {
  res.json({ message_1: "welcome", message_2: "api is running" });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

mongoose.connect(uri, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

connection.on("error", (err) => {
  console.error("MongoDB Atlas connection error:", err);
});*/
