// TestScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bienvenue</Text>
        <Text style={styles.carbonText}>Voici votre taux de carbone</Text>
        <Text style={styles.questionText}>Souhaitez-vous répondre à un questionnaire ?</Text>

        {/* Ajouter un bouton pour aller au RankingScreen */}
      <TouchableOpacity 
        style={styles.rankingButton} 
        onPress={() => navigation.navigate('Rank')}
      >
        <Text style={styles.rankingButtonText}>Voir le Classement</Text>
      </TouchableOpacity>
      </View>
      <Image 
        source={require('./Image/Logo_Smartco.png')} 
        style={styles.image}
      />
      <TouchableOpacity 
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profil')}
      >
        <Image 
          source={require('./Image/image_Profil.jpg')} // Assurez-vous que le chemin est correct
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    flex: 1,
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
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default TestScreen;