import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // true pour connexion, false pour inscription

  const handleSubmit = () => {
    // Ici, vous pouvez ajouter la logique pour la connexion ou l'inscription
    console.log(isLogin ? 'Connexion' : 'Inscription', ' - Username:', username, 'Password:', password);
  };

  const toggleFormType = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./Image/Logo_Smartco.png')} 
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>{isLogin ? 'Connexion' : 'Inscription'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title={isLogin ? 'Se connecter' : 'S\'inscrire'} onPress={handleSubmit} />
        <TouchableOpacity onPress={toggleFormType}>
          <Text style={styles.toggleText}>
            {isLogin ? "Pas encore inscrit ? S'inscrire" : 'Déjà inscrit ? Se connecter'}
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50, 
    height: 50, 
    position: 'absolute', 
    top: 10, 
    right: 10, 
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
  },
  toggleText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
  },
});