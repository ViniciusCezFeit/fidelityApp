import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image,ScrollView } from 'react-native';



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (data) => {
        navigation.navigate('Profile');

    }

    return (
        <ScrollView>

            <View style={styles.container}>
                <Image style={{ width: 300, height: 200 }} source={require('./assets/logo.png')} />

                <br></br>

                <Text style={styles.lotitle}>
                    Login
                </Text>
                <TextInput style={styles.loinput} placeholder='E-mail' value={email} onChangeText={setEmail} />
                <TextInput secureTextEntry={true} style={styles.loinput} placeholder='Senha' value={senha} onChangeText={setSenha} />
                <Button title="Logar" onPress={handleLogin} />

            </View>
        </ScrollView>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#000'
    },

    lotitle: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        color: 'white'
    },
    loinput: {
        height: 40,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});
export default Login;