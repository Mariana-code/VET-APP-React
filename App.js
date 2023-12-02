/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * 
 * librería que estamos usando: https://rnfirebase.io/
 * 
 * npx react-native@latest init React2 --template react-native-template-typescript
 * npm install --save @react-native-firebase/app
 * npm install --save @react-native-firebase/auth
 * npm install --save @react-native-firebase/firestore
 * 
 * npx react-native start
 * 
 * obtencion de certificate fingerprint "SHA1"
 * para hacerlo con nuestro proyecto. ubica una terminal en la raiz del proyecto y corre:
 * keytool -list -v -alias androiddebugkey -keystore ./android/app/debug.keystore 
 * password: android
 * Se copia el "SHA1" generado y se agrega a la huella digital de firebase
 * Se tienen que regenerar los archivos
 * Se vuelve a descargar el archivo "google-services.json" en android app
 */

// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LogIn from './Views/LogIn';
import PetDetails from './Views/PetDetails';
import PetRegister from './Views/PetRegister';
import PetsList from './Views/PetsList';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  
          name = "Log In" 
          component = {LogIn} 
          options = {{ headerShown: false}}
        />
        <Stack.Screen 
          name = "Pets List" 
          component={PetsList} 
          options = {{ tittle: "Pets Lists"}}
        />
        <Stack.Screen 
          name = "Pet Register" 
          component={PetRegister} 
          options = {{ tittle: "Pet Registration"}}
        />
        <Stack.Screen 
          name = "Pet Details" 
          component={PetDetails} 
          options = {{ tittle: "Pet Details"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  }
})