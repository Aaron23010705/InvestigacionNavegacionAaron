import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const StudentCard = ({ name, age, image }) => {
  return (
    <View style={styles.card}>
      {/* Imagen del estudiante */}
      <View style={styles.imageContainer}>
        <Image 
          source={image} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Información del estudiante */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>Edad: {age} años</Text>
        
        {/* Información adicional */}
        <View style={styles.additionalInfo}>
          <Text style={styles.infoItem}>📚 Carrera: Desarrollo de Software</Text>
          <Text style={styles.infoItem}>🎓 Año: Tercer Año</Text>
          <Text style={styles.infoItem}>📱 Módulo: 3.5 - Componentes Móviles</Text>
          <Text style={styles.infoItem}>🏫 Instituto Técnico Ricaldone</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#3498db',
  },
  infoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 8,
  },
  age: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
    fontWeight: '600',
  },
  additionalInfo: {
    width: '100%',
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
    padding: 15,
  },
  infoItem: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default StudentCard;