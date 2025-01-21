import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';

function ProfilScreen({ navigation }) {
  const [username, setUsername] = useState('UtilisateurActuel'); // Remplacez par le username actuel
  const [profilePhoto, setProfilePhoto] = useState(require('./Image/image_Profil.jpg')); // Remplacez par le chemin de l'image actuelle

  // Fonction pour gérer le changement de username
  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  // Fonction pour gérer le changement de photo de profil (simulée, car pas de base de données)
  const handleProfilePhotoChange = () => {
    // Ici, dans un vrai scénario, vous auriez une logique pour permettre à l'utilisateur de choisir une nouvelle image
    // Pour l'instant, nous allons simplement changer l'image par défaut pour une autre
    setProfilePhoto(require('./Image/new-profile-photo.jpg')); // Remplacez par le chemin d'une nouvelle image
  };

  // Fonction pour valider les changements (simulée, car pas de base de données)
  const handleSubmit = () => {
    console.log('Changements validés - Username:', username);
    // Ici, dans un vrai scénario, vous enverriez ces informations à votre base de données
  };

  return (
    <View style={styles.container}>
      {/* Bouton Home en haut à gauche */}
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('TestScreen')}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>

      {/* Ajouter un bouton pour aller au RankingScreen */}
      <TouchableOpacity 
        style={styles.rankingButton} 
        onPress={() => navigation.navigate('RankingScreen')}
      >
        <Text style={styles.rankingButtonText}>Voir le Classement</Text>
      </TouchableOpacity>

      {/* Photo de profil au milieu */}
      <View style={styles.profilePhotoContainer}>
        <Image source={profilePhoto} style={styles.profilePhoto} />
      </View>

      {/* Formulaire pour changer le username */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username :</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={handleUsernameChange}
          placeholder="Nouveau username"
        />

        {/* Bouton pour changer la photo de profil */}
        <TouchableOpacity style={styles.changePhotoButton} onPress={handleProfilePhotoChange}>
          <Text style={styles.changePhotoButtonText}>Changer la photo de profil</Text>
        </TouchableOpacity>

        {/* Bouton Valider */}
        <Button title="Valider" onPress={handleSubmit} />
      </View>
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
    padding: 20,
  },
  homeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  profilePhotoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75, // Pour faire un cercle
  },
  formContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
    borderRadius: 5,
  },
  changePhotoButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#008CBA',
    borderRadius: 5,
    alignItems: 'center',
  },
  changePhotoButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfilScreen;