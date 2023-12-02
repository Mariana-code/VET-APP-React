import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import { ListItem, Avatar} from 'react-native-elements'

const PetsList = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users = [];
            querySnapshot.docs.forEach((doc) => {
                const { name, owner, age, weight } = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    owner,
                    age,
                    weight,
                })
            });
            
            setUsers(users)
        })
    }, [])

    return (
        <ScrollView>
            <Button title = "Register Pet" 
                onPress={() => props.navigation.navigate("Pet Register")} 
            />
            { users.map((user) => {

                    return(
                        <ListItem key = {user.id} bottomDivider onPress={() => {
                            props.navigation.navigate('Pet Details', {
                                petId: user.id
                            })
                        }}>
                            <ListItem.Chevron/>
                            <Avatar source = {require('../Assets/Memo.png')}/>
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>Owner: {user.owner}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>

    );
};

export default PetsList

const styles = StyleSheet.create({})