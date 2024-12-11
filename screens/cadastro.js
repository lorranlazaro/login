import React, { useState } from 'react';
import { Text, View, Button, TextInput, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroScreen = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navegacao = useNavigation();

  const executarCadastro = () => {
    Alert.alert("Cadastro Efetuado com Sucesso!", "Usuário: " + email);
    navegacao.navigate('tela_inicial')
  };

  return (
    <View >
      <Text style={{ paddingLeft: 15, paddingTop: 15 }} >E-mail</Text>
      <TextInput style={{ paddingLeft: 15, paddingTop: 15 }} value={email} onChangeText={setEmail} />
      <Text style={{ paddingLeft: 15, paddingTop: 15 }} >Senha</Text>
      <TextInput style={{ paddingLeft: 15, paddingTop: 15 }} value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title='Cadastrar' onPress={executarCadastro} />
      <Button title='HOME' style={{ paddingVertical: 15 }} onPress={() => navegacao.navigate('home')} />
      <Text style={styles.hyperlinkStyle}
        onPress={() => navegacao.navigate('login')}>Fazer login</Text>

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

export default CadastroScreen;