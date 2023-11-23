import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

export let logado = false;

export default function Login() {
  const navigation = useNavigation();

  const conta = {
    nome: 'artur',
    email: 'artur@gmail.com',
    cpf: '06614072927',
    telefone: '4899999999',
    senha: 'Aaaaa'
  }

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erroLogin, setErroLogin] = useState('')

  const fazerLogin = () => {
    // Verifica se o nome de usuário e a senha correspondem à conta
    if (usuario === conta.nome && senha === conta.senha) {
      logado = true;
      navigation.navigate('Home');
    } else {
      setErroLogin('Nome de usuário ou senha incorretos. Tente novamente.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.cima}>
          <Text style={styles.textoTitulo}> Login </Text>
          <Ionicons name='person-outline' size={55} color={'#ffa500'} />
        </View>
        <View style={styles.meio}>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Usuario</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput value={usuario} onChangeText={setUsuario} placeholder='Usuario' style={styles.input} />
            </View>
          </View>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Senha</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput value={senha} onChangeText={setSenha} placeholder='Senha' style={styles.input} secureTextEntry={true} />
            </View>
          </View>
          <Text style={styles.erroLogin}>{erroLogin}</Text>
        </View>
        <View style={styles.baixo}>
          <TouchableOpacity onPress={fazerLogin} style={styles.botaoAdd}>
            <Text>Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.botaoTrc}>
            <Text>Registro</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  )
}
