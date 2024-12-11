import React, { useState } from 'react';
import { Text, View, Button, TextInput, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, signInWithEmailAndPassword } from '../backend/firebase_config';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navegacao = useNavigation();

  const executarLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert("Login Efetuado com Sucesso!", email)
      navegacao.navigate('tela_inicial');
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View>

      <Text style={{ paddingLeft: 15, paddingTop: 15 }}>E-mail</Text>
      <TextInput style={{ paddingLeft: 15, paddingTop: 15 }} value={email} onChangeText={setEmail} />
      <Text style={{ paddingLeft: 15, paddingTop: 15 }}>Senha</Text>
      <TextInput style={{ paddingLeft: 15, paddingTop: 15 }} value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title='LOGAR' onPress={executarLogin} />
      <Button title='HOME' onPress={() => navegacao.navigate('home')} />
      <Text style={styles.hyperlinkStyle} onPress={
        () => navegacao.navigate('cadastro')}>Cadastre-se</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hyperlinkStyle: {
    color: 'blue',
    textAlign: "right",
    padding: 20,
  },
}
);
export default LoginScreen;