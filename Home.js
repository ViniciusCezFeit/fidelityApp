import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,ScrollView } from 'react-native';



const Home = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar />

        <Image style={{ width: 300, height: 200 }} source={require('./assets/logo.png')} />

        <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{ color: 'black', textAlign: 'center' }}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'black', textAlign: 'center' }}>Logar</Text>
        </TouchableOpacity>

        <br></br>
        <br></br>
        <br></br>

        <Text style={{ color: 'white', textAlign: 'center' }}>Programa de beneficio do cliente.</Text>
        <Text style={{ color: 'white', textAlign: 'center' }}>Venha fazer parte da nossa equipe de fidelidade.</Text>
        <Text style={{ color: 'white', textAlign: 'center' }}>Cadastre seu PET e ganhe beneficios e descontos na proxima visita.</Text>
        <br></br>
        <br></br>
        <br></br>
        <Text style={{ color: 'white', textAlign: 'center' }}>Acumele pontos, seja um Kizaemon Fidelity</Text>
        <br></br>
        <br></br>
        <Text style={{ fontSize: 100, fontStyle: 'italic', color: '#6B3FA0' }}>Kizaemon</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'top',
  },
  btnCadastro: {
    width: '35%',
    height: 40,
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center'
  },
  btnLogin: {
    width: '35%',
    height: 40,
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center'
  }

});

export default Home;
