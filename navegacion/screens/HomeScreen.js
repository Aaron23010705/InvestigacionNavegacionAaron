import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Información del módulo */}
        <View style={styles.moduleCard}>
          <Text style={styles.moduleTitle}>
            Módulo 3.5: Desarrollo de componentes para dispositivos móviles
          </Text>
          
          <Text style={styles.moduleDescription}>
            Este módulo se centra en el desarrollo de aplicaciones móviles utilizando React Native. 
            Los estudiantes aprenderán a crear componentes reutilizables, implementar navegación 
            entre pantallas, manejar el estado de la aplicación y desarrollar interfaces de usuario 
            modernas y funcionales para dispositivos móviles.
          </Text>

          <View style={styles.moduleDetails}>
            <Text style={styles.detailItem}>• Desarrollo con React Native</Text>
            <Text style={styles.detailItem}>• Navegación entre pantallas</Text>
            <Text style={styles.detailItem}>• Componentes reutilizables</Text>
            <Text style={styles.detailItem}>• Manejo de props y estado</Text>
            <Text style={styles.detailItem}>• Diseño de interfaces móviles</Text>
          </View>

          <View style={styles.institutionInfo}>
            <Text style={styles.institution}>Instituto Técnico Ricaldone</Text>
            <Text style={styles.teacher}>Docente: Ing. Wilfredo Granados</Text>
            <Text style={styles.level}>Tercer Año de Desarrollo de Software</Text>
          </View>
        </View>

        {/* Botón para navegar al perfil */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Ver Perfil del Estudiante</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  moduleCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  moduleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  moduleDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495e',
    marginBottom: 20,
    textAlign: 'justify',
  },
  moduleDetails: {
    marginBottom: 20,
  },
  detailItem: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
    paddingLeft: 10,
  },
  institutionInfo: {
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
    paddingTop: 15,
  },
  institution: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 5,
  },
  teacher: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 3,
  },
  level: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;