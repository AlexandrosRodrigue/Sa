import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import ConfirmacaoExclusao from '../../components/ModalConfirmacao';

export default function Opcoes() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleExcluirConta = () => {
    setModalVisible(true);
  };

  const handleConfirmarExclusao = (senha) => {
    // Lógica para confirmar a exclusão com a senha
    console.log('Senha digitada:', senha);

    // Fechar o modal após a confirmação
    setModalVisible(false);
  };

  return (



    <View style={styles.container}>
      <View style={styles.body}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleExcluirConta}>
        <Text>Excluir conta</Text>
      </TouchableOpacity>
      <ConfirmacaoExclusao
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmarExclusao}
      />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}
