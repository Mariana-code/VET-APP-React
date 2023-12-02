import { StyleSheet, TextInput, View, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from '../firebase'

const PetDetails = (props) => {

    const [state, setState] = useState({
        name: "",
        owner: "",
        age: "",
        weight: "",
    });

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        const user = doc.data();
    
        if (user) {
            setState({
                name: user.name , 
                owner: user.owner , 
                age: user.age ,
                weight: user.weight ,
            });
        }
    };

    const updatePet = async () => {
        const { name, owner, age, weight } = state; 

        try {
            const dbRef = firebase.db.collection('users').doc(props.route.params.petId); 
            await dbRef.update(state); 
            console.log('Pet information updated successfully!');
            props.navigation.navigate('Pets List');
        } catch (error) {
            console.error('Error updating pet information:', error);
        }
    };
    
    useEffect(() => {
        getUserById(props.route.params.petId);
    }, []);
    

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value})
    };

    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.inputGroup}>
                <TextInput 
                    placeholder="Pet name" 
                    onChangeText={(value) => handleChangeText("name", value)}
                    value={state.name} 
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput 
                    placeholder="Owner name"
                    onChangeText={(value) => handleChangeText("owner", value)}
                    value={state.owner} 
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput 
                    placeholder="Age"
                    onChangeText={(value) => handleChangeText("age", value)}
                    value={state.age} 
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput 
                    placeholder="Weight" 
                    onChangeText={(value) => handleChangeText("weight", value)}
                    value={state.weight} 
                />
            </View>
            <View>
                <Button title = "Save Pet" onPress={() => updatePet()}/>
            </View>
        </ScrollView>
    )
}

export default PetDetails

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