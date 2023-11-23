import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Modal, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ConfirmacaoExclusao = ({ visible, onClose, onConfirm }) => {
  const [senha, setSenha] = useState('');
  const senhaInputRef = useRef(null);

  useEffect(() => {
    if (visible) {
      // Foca no input de senha quando o modal é exibido
      senhaInputRef.current && senhaInputRef.current.focus();
    }
  }, [visible]);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Digite sua senha para confirmar a exclusão da conta:</Text>
          <TextInput
            ref={senhaInputRef}
            secureTextEntry
            placeholder="Senha"
            value={senha}
            onChangeText={(text) => setSenha(text)}
            style={styles.input}
          />
          <TouchableOpacity style={styles.btn} onPress={() => onConfirm(senha)}>
            <Text>Confirmar Exclusão</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={onClose}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '30%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    margin: 10,
  },
  btn: {
    width: '75%',
    height: '20%',
    margin: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ConfirmacaoExclusao;
