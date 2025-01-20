import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function TestScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bienvenue</Text>
        <Text style={styles.carbonText}>Voici votre taux de carbone</Text>
        <Text style={styles.questionText}>Souhaitez-vous répondre à un questionnaire ?</Text>
      </View>
      <Image 
        source={require('./Image/Logo_Smartco.png')} 
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Même fond vert
    flexDirection: 'row', // Pour positionner l'image à droite
    alignItems: 'center',
    justifyContent: 'space-between', // Pour espacer le contenu et l'image
    padding: 20,
  },
  content: {
    flex: 1, // Prend tout l'espace restant à gauche
    justifyContent: 'center',
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
  },
  image: {
    width: 50, // Ajustez selon la taille de votre image
    height: 50,
    marginLeft: 20, // Pour ajouter un peu d'espace entre le texte et l'image
  },
});

export default TestScreen;