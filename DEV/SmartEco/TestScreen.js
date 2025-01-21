import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

function TestScreen({ navigation }) {
  // États pour chaque question
  const [transport, setTransport] = useState(null);
  const [flights, setFlights] = useState(null);
  const [meat, setMeat] = useState(null);
  const [heating, setHeating] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [carbonScore, setCarbonScore] = useState(0); // État pour le score carbone

  // Fonction pour calculer le score carbone basé sur les réponses
  const calculateCarbonScore = () => {
    let score = 0;
    if (transport === 'A') score += 2.5;
    else if (transport === 'B') score += 1.25;
    else if (transport === 'C') score += 0.5;

    if (flights === 'A') score += 2;
    else if (flights === 'B') score += 0.75;

    if (meat === 'A') score += 1.5;
    else if (meat === 'B') score += 0.75;
    else if (meat === 'C') score += 0.25;

    if (heating === 'A') score += 2;
    else if (heating === 'B') score += 1;
    else if (heating === 'C') score += 0.1;

    if (electronics === 'A') score += 1;
    else if (electronics === 'B') score += 0.5;
    else if (electronics === 'C') score += 0.25;

    setCarbonScore(score.toFixed(2)); // Met à jour le score carbone avec deux décimales
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bienvenue</Text>
        <Text style={styles.carbonText}>Voici votre taux de carbone</Text>

        {/* Questions du questionnaire */}
        {[
          { question: 'Mode de transport principal:', state: [transport, setTransport], options: ['Voiture essence', 'Voiture électrique', 'Transports en commun'] },
          { question: 'Fréquence des voyages en avion:', state: [flights, setFlights], options: ['Plusieurs fois par an', 'Une fois par an', 'Rarement ou jamais'] },
          { question: 'Consommation de viande:', state: [meat, setMeat], options: ['Tous les jours', 'Quelques fois par semaine', 'Rarement ou jamais'] },
          { question: 'Chauffage de votre logement:', state: [heating, setHeating], options: ['Gaz ou fioul', 'Électricité', 'Énergies renouvelables'] },
          { question: 'Consommation d\'énergie électronique:', state: [electronics, setElectronics], options: ['Utilisation fréquente d\'appareils énergivores', 'Utilisation modérée, appareils efficaces', 'Faible consommation'] },
        ].map(({ question, state, options }, index) => (
          <View key={index}>
            <Text style={styles.questionText}>{question}</Text>
            {options.map((option, optionIndex) => (
              <TouchableOpacity 
                key={optionIndex} 
                style={styles.optionButton} 
                onPress={() => state[1](String.fromCharCode(65 + optionIndex))} // A, B, C
              >
                <Text style={[styles.optionText, state[0] === String.fromCharCode(65 + optionIndex) ? styles.selectedOption : null]}>
                  {String.fromCharCode(65 + optionIndex)}. {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* Bouton pour calculer le score */}
        <TouchableOpacity 
          style={styles.calculateButton} 
          onPress={calculateCarbonScore}
        >
          <Text style={styles.calculateButtonText}>Calculer le Taux de Carbone</Text>
        </TouchableOpacity>

        {/* Affichage du score */}
        <Text style={styles.carbonResult}>Votre empreinte carbone est d'environ {carbonScore} tonnes de CO2 par an.</Text>

        {/* Bouton pour aller au RankingScreen */}
        <TouchableOpacity 
          style={styles.rankingButton} 
          onPress={() => navigation.navigate('Rank')}
        >
          <Text style={styles.rankingButtonText}>Voir le Classement</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carbonText: {
    fontSize: 18,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 2,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 14,
  },
  selectedOption: {
    fontWeight: 'bold',
    color: 'green',
  },
  calculateButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  carbonResult: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rankingButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  rankingButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TestScreen;