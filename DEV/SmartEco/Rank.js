import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';

function RankingScreen({ navigation }) {
  const [ranking, setRanking] = useState([
    { id: '1', name: 'Alice', carbonFootprint: 450 },
    { id: '2', name: 'Bob', carbonFootprint: 300 },
    { id: '3', name: 'Charlie', carbonFootprint: 600 },
    // Add more users as needed
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userFootprint}>{item.carbonFootprint} kg CO2</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Bouton Home en haut à gauche */}
      <View style={styles.rankingContainer}>
        <Text style={styles.title}>Classement Empreinte Carbone</Text>
        <FlatList
          data={ranking}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </View>
      <TouchableOpacity 
        style={styles.QRcodeButton} 
        onPress={() => navigation.navigate('QRcode')}
      >
        <Text style={styles.QRcodeButtonText}>Voir le QRcode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    QRcodeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        alignItems: 'center',
      },
    QRcodeButtonText: {
        color: 'white',
        fontWeight: 'bold',},
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
  rankingContainer: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
  },
  userName: {
    fontSize: 18,
  },
  userFootprint: {
    fontSize: 18,
    color: '#4CAF50',
  },
});

export default RankingScreen;