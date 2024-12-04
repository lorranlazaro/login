import React from 'react';
import { StatusBar } from 'expo-status-bar';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import HomeScreen from './screens/home';
import LoginScreen from './screens/login';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={HomeScreen}/>     
          <Stack.Screen name="login" component={LoginScreen}/>
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
 }
);
