import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image,ScrollView } from 'react-native';



import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    username: yup.string().required("Informe seu username"),
    email: yup.string().email("Email invalido").required("Informe seu email"),
    senha: yup.string().min(6, "Minimo 6 caracteres").required("Informe sua senha")
})

const Cadastro = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)

    })

    const handleCadastro = (data) => {
        console.log(data);
        navigation.navigate("Home");
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={{ width: 300, height: 200 }} source={require('./assets/logo.png')} />

                <br></br>

                <Text style={styles.title}>
                    Kizaemon fidelity
                </Text>
                <Controller
                    control={control}
                    name="username"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Nome'
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                        />
                    )}
                />
                {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='E-mail'
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                        />
                    )}
                />
                {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
                <Controller
                    control={control}
                    name="senha"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder='Senha'
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                        />
                    )}
                />
                {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}
                <Button title="Cadastrar" onPress={handleSubmit(handleCadastro)} />

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
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        color: 'white'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 8,
    },

    labelError: {
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8,
    }
});
export default Cadastro;