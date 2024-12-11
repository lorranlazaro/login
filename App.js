import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import CadastroScreen from './screens/cadastro';
import TelaInicial from './screens/tela_inicial';

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={HomeScreen}/>     
          <Stack.Screen name="login" component={LoginScreen}/>
          <Stack.Screen name="cadastro" component={CadastroScreen}/>
          <Stack.Screen name="tela_inicial" component={TelaInicial}/>
        </Stack.Navigator> 
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkStyle: {
    color: 'blue',
  }
 }
);
