import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';


const LoginScreen = () => {

   //const navegacao = userNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    

    return (
        <View >
          <Text>E-mail</Text>
          <TextInput value = "{email}"/>
          <Text>Senha</Text>
          <TextInput value = "{senha}" secureTextEntry/>
          <Button title='Entrar'/>
        </View>    
    
      );
};

export default LoginScreen;