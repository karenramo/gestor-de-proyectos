import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const Home = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Encabezado con el logo */}
      <View style={styles.header}>
        {/* Imagen redimensionada desde URL */}
        <Image
          source={{ uri: 'https://scontent.flim6-2.fna.fbcdn.net/v/t39.30808-6/433883540_804705401686351_2647339470791586403_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zdXKQiakbVMQ7kNvgFvSWwn&_nc_zt=23&_nc_ht=scontent.flim6-2.fna&oh=00_AfCZ9jgMJnsgSsIauurnUtU3_6voU8A4wpJLKwDh41npPA&oe=664175C8' }}
          style={styles.logo}
        />
      </View>

      {/* Contenido con imagen de fondo */}
      <ImageBackground
        source={{ uri: 'https://elcomercio.pe/resizer/7-iNW2CrOv38iypONlsVPBZTIs0=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VE5OEES6CJDQHEVJWWSKRPDOJE.jpg' }} // URL de la imagen de fondo
        style={styles.content}
        resizeMode="cover" // Ajuste de la imagen de fondo
      >
        <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Carrera')}>
          <FontAwesome5 name="graduation-cap" size={24} color="#fff" />
          <Text style={styles.buttonText}>Carrera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Supervisor')}>
          <FontAwesome5 name="user-tie" size={24} color="#fff" />
          <Text style={styles.buttonText}>Supervisor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Persona')}>
          <FontAwesome5 name="users" size={24} color="#fff" />
          <Text style={styles.buttonText}>Persona</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Proyecto')}>
          <FontAwesome5 name="briefcase" size={24} color="#fff" />
          <Text style={styles.buttonText}>Proyecto</Text>
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Proyecto Final</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'left',
    backgroundColor: '#33FFFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150, // Ancho deseado
    height: 70, // Alto deseado
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#33FFFF',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#333',
  },
});

export default Home;
