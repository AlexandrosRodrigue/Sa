import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Modal, Alert } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Registro = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [nomeValido, setNomeValido] = useState(false);
  const [sobrenomeValido, setSobrenomeValido] = useState(false);
  const [emailValido, setEmailValido] = useState(false);
  const [cpfValido, setCpfValido] = useState(false);
  const [senhaValida, setSenhaValida] = useState(false);
  const [confirmarSenhaValida, setConfirmarSenhaValida] = useState(false);

  const isValidEmail = (email) => {
    // Adicione a lógica de validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidCPF = (cpf) => {
    // Adicione a lógica de validação de CPF
    const cpfRegex = /^[0-9]{11}$/;
    return cpfRegex.test(cpf);
  };

  const isValidPassword = (password) => {
    // Adicione a lógica de validação de senha (por exemplo, deve ter pelo menos 6 caracteres)
    return password.length >= 6;
  };

  const validarCampos = () => {
    setNomeValido(nome.trim() !== '');
    setSobrenomeValido(sobrenome.trim() !== '');
    setEmailValido(isValidEmail(email));
    setCpfValido(isValidCPF(cpf));
    setSenhaValida(isValidPassword(senha));
    setConfirmarSenhaValida(confirmarSenha === senha);
  };

  const registrar = () => {
    validarCampos();

    if (nomeValido && sobrenomeValido && emailValido && cpfValido && senhaValida && confirmarSenhaValida) {
      // Se todos os campos são válidos, pode prosseguir com o registro
      const usuarioTemp = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        cpf: cpf,
        senha: senha,
      };
      // Aqui você pode salvar o usuário, exibir um modal de sucesso, etc.
      setModalVisible(true);
    } else {
      // Exibir mensagem de erro ou fazer algo quando o registro falhar
      Alert.alert('Erro', 'Preencha todos os campos corretamente.');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.cima}>
          <Text style={styles.textoTitulo}> Registro </Text>
          <Ionicons name="person-outline" size={55} color={'#ffa500'} />
        </View>
        <View style={styles.meio}>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Nome</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={nome}
                onChangeText={(text) => {
                  setNome(text);
                  setNomeValido(text.trim() !== '');
                }}
                placeholder="Nome"
                style={[styles.input, { borderColor: nomeValido ? 'green' : 'red' }]}
              />
            </View>
          </View>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Sobrenome</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={sobrenome}
                onChangeText={(text) => {
                  setSobrenome(text);
                  setSobrenomeValido(text.trim() !== '');
                }}
                placeholder="Sobrenome"
                style={[styles.input, { borderColor: sobrenomeValido ? 'green' : 'red' }]}
              />
            </View>
          </View>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Email</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailValido(isValidEmail(text));
                }}
                placeholder="Email"
                style={[styles.input, { borderColor: emailValido ? 'green' : 'red' }]}
              />
            </View>
          </View>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>CPF</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={cpf}
                onChangeText={(text) => {
                  setCpf(text);
                  setCpfValido(isValidCPF(text));
                }}
                placeholder="CPF"
                style={[styles.input, { borderColor: cpfValido ? 'green' : 'red' }]}
                autoCompleteType="off"
              />
            </View>
          </View>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Senha</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={senha}
                onChangeText={(text) => {
                  setSenha(text);
                  setSenhaValida(isValidPassword(text));
                }}
                placeholder="Senha"
                style={[styles.input, { borderColor: senhaValida ? 'green' : 'red' }]}
                secureTextEntry
              />
            </View>
          </View>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Confirmar Senha</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={confirmarSenha}
                onChangeText={(text) => {
                  setConfirmarSenha(text);
                  setConfirmarSenhaValida(text === senha);
                }}
                placeholder="Confirmar Senha"
                style={[styles.input, { borderColor: confirmarSenhaValida ? 'green' : 'red' }]}
                secureTextEntry
              />
            </View>
          </View>
        </View>
        <View style={styles.baixo}>
          <TouchableOpacity style={styles.botaoAdd} onPress={registrar}>
            <Text>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoTrc} onPress={() => navigation.navigate('Login')}>
            <Text>Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}></View>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Registro concluído com sucesso!</Text>
            <TouchableOpacity style={styles.btn} onPress={closeModal}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Registro;
