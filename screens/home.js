import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
    const navegacao = useNavigation();
    return (
        <View style={style.container}>
          <Text>HOME</Text>
          <Button title = 'home' onPress = {() => navegacao.navigate('login')}/>
          <StatusBar style="auto" />
        </View>    
    
      );
};

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default Home;