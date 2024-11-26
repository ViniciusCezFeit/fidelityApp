import React, { useState } from "react";
import { View, Text,TextInput,Button, StyleSheet, ScrollView, Image } from "react-native";


const Profile = ({ navigation }) => {
    const [nomeAnimal, setnomeAnimal] = useState('');
    const [peso, setPeso] = useState('');
    const [raca, setRaca] = useState('');
    const [nasc, setNasc] = useState('');

    const registro =(()=>{
        alert("Registrado com sucesso")
        window.close

    })


    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.title}>Perfil do usuario</Text>

                <Image style={styles.container} source={require('./assets/logo.png')} />

                <TextInput style={styles.loinput} placeholder='Nome do PET' value={nomeAnimal} onChangeText={setnomeAnimal} />
                <TextInput style={styles.loinput} placeholder='Peso' value={peso} onChangeText={setPeso} />
                <TextInput style={styles.loinput} placeholder='Raca' value={raca} onChangeText={setRaca} />
                <TextInput style={styles.loinput} placeholder='Data de nascimento' value={nasc} onChangeText={setNasc} />
                <Button title="Registrar" onPress={registro} />


            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        color: '#000'
    },
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

export default Profile;