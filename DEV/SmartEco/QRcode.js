import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';

function QRCodeScreen() {
// Generate a new number each time the screen loads or "Simuler le Scan" is pressed
const [number, setNumber] = useState(Math.floor(Math.random() * 10000));
const navigation = useNavigation();

// Function to generate a new number and update the QR code
const handleScan = () => {
  const newNumber = Math.floor(Math.random() * 10000);
  setNumber(newNumber);
  console.log('QR Code scanned, new number:', newNumber);
  // Here you would typically send this number to a backend to be stored or processed
  };

  return (
    <View style={styles.container}>

      <View style={styles.qrContainer}>
        <Text style={styles.title}>Scannez ce QR Code pour obtenir un chiffre</Text>
        <QRCode 
          value={JSON.stringify({ number: number })}
          size={200}
          color="black"
          backgroundColor="white"
        />
      </View>

      <TouchableOpacity onPress={handleScan} style={styles.scanButton}>
        <Text style={styles.scanButtonText}>Simuler le Scan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  qrContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  scanButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#008CBA',
    borderRadius: 5,
    alignItems: 'center',
  },
  scanButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default QRCodeScreen;