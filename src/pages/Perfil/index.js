import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();

  const contaInicial = {
    nome: 'artur',
    email: 'artur@gmail.com',
    cpf: '06614072927',
    telefone: '4899999999',
    senha: 'Aaaaa'
  }

  const [conta, setConta] = useState(contaInicial);
  const [nome, setNome] = useState(conta.nome);
  const [email, setEmail] = useState(conta.email);
  const [cpf, setCpf] = useState(conta.cpf);
  const [senha, setSenha] = useState(conta.senha);
  const [editavel, setEditavel] = useState(false);

  const habilitarEdicao = () => {
    setEditavel(true);
  }

  const salvarEdicao = () => {
    setEditavel(false);
    setConta({
      ...conta,
      nome: nome,
      email: email,
      cpf: cpf,
      senha: senha,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.cima}>
          <Text style={styles.textoTitulo}> Meu Perfil </Text>
          <Ionicons name='person-outline' size={55} color={'#ffa500'} />
        </View>
        <View style={styles.meio}>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Nome</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder='Nome'
                style={styles.input}
                editable={editavel}
              />
              {!editavel && (
                <Ionicons name='lock-closed-outline' size={20} color={'#ccc'} style={styles.iconLock} />
              )}
            </View>
          </View>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Email</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder='Email'
                style={styles.input}
                editable={editavel}
              />
              {!editavel && (
                <Ionicons name='lock-closed-outline' size={20} color={'#ccc'} style={styles.iconLock} />
              )}
            </View>
          </View>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>CPF</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={cpf}
                onChangeText={setCpf}
                placeholder='CPF'
                style={styles.input}
                editable={editavel}
              />
              {!editavel && (
                <Ionicons name='lock-closed-outline' size={20} color={'#ccc'} style={styles.iconLock} />
              )}
            </View>
          </View>
          <View style={styles.viewNomeInput}>
            <View style={styles.viewNome}>
              <Text>Senha</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
                value={senha}
                onChangeText={setSenha}
                placeholder='Senha'
                style={styles.input}
                editable={editavel}
                secureTextEntry={true}
              />
              {!editavel && (
                <Ionicons name='lock-closed-outline' size={20} color={'#ccc'} style={styles.iconLock} />
              )}
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%' }}>
            {!editavel && (
              <TouchableOpacity onPress={habilitarEdicao} style={styles.botaoEditar}>
                <Text>Editar</Text>
              </TouchableOpacity>
            )}
            {editavel && (
              <TouchableOpacity onPress={salvarEdicao} style={styles.botaoSalvar}>
                <Text>Salvar</Text>
              </TouchableOpacity>
            )}

          </View>
        </View>
        <View style={styles.baixo}>
          <TouchableOpacity onPress={() => navigation.navigate('Opcoes')} style={styles.botaoAdd}>
            <Text>Opções</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ListasSalvas')} style={styles.botaoAdd}>
            <Text>Minhas listas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  );
}
