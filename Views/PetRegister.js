import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native'
import React, { useState } from 'react'
import {db} from '../firebase'
import firebase from '../firebase'

const PetRegister = (props) => {

    const [state, setState] = useState({
        name: "",
        owner: "",
        age: "",
        weight: "",
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value})
    };

    const saveNewPet = async () => {
        if(state.name === '') {
            alert("Ponle un nombre a tu Pet!")
        }
        else if(state.age === '' || state.weight === '' || state.owner === '') {
            alert("Completa todos los campos")
        }
        else {
            try {
                await firebase.db.collection('users').add({
                    name: state.name,
                    owner: state.owner,
                    age: state.age,
                    weight: state.weight,
                })
                props.navigation.navigate('Pets List');
            }
            catch(error) {
                console.log(error)
            }
        }
    }

    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Pet name"
                    onChangeText={(value) => handleChangeText("name", value)}
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Owner name"
                    onChangeText={(value) => handleChangeText("owner", value)}
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Age"
                    onChangeText={(value) => handleChangeText("age", value)}
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Weight" 
                    onChangeText={(value) => handleChangeText("weight", value)}
                />
            </View>
            <View>
                <Button title = "Save Pet" onPress={() => saveNewPet()}/>
            </View>
        </ScrollView>
    )
}

export default PetRegister

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
    }
})