import { KeyboardAvoidingView, TextInput, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    const handleSignUp = () => {
        firebase.auth
            .createUserWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:',user.email);
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Pets List' }] 
                    })
                );
            })
            .catch(error => alert(error.message))
    }

    const handleLogIn = () => {
        firebase.auth
            .signInWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:',user.email);
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Pets List' }] 
                    })
                );
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style = {styles.container}
            behavior="padding"
        >
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value = {email}
                    onChangeText={text => setEmail(text)}
                    style = {styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value = {password}
                    onChangeText={text => setPassword(text)}
                    style = {styles.input}
                    secureTextEntry
                />
            </View>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {handleLogIn()}}
                    style = {styles.button}
                >
                    <Text style = {styles.buttonText}> LogIn </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {handleSignUp()}}
                    style = {[styles.button, styles.buttonOutline]}
                >
                    <Text style = {styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
    }

    export default LogIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },

})