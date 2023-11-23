import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import RNPickerSelect from 'react-native-picker-select';
import Api from "../../services/api"

export default function Cadastro() {
  const [cep, setCep] = useState("")
  const [logradouro, setLougradoro] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [uf,setUf] = useState("")
  const [produto, setProduto] = useState('');
  const [tamanhoLista, setTamanhoLista] = useState('');
  const [selectedGenero, setSelectedGenero] = useState(null);
  const [selectedDesconto, setSelectedDesconto] = useState(null);
  const [isCadastroEfetuado, setIsCadastroEfetuado] = useState(false);

  
  async function buscarCep(){
    const endereco = []
  
    const enderecoTemp = {
      numeroCep: cep,
      Rua: logradouro,
      bairro: bairro,
      cidade: cidade,
      estado: uf,
    }

    if (cep == ""){
      alert("CEP inválido!")
    }

    try{
      const response = await Api.get(`/${cep}/json/`)
      setLougradoro(response.data.logradouro)
      setBairro(response.data.bairro)
      setCidade(response.data.localidade)
      setUf(response.data.uf)
    }catch(error){
      console.log("ERRO" + error)
    }
    endereco.push(enderecoTemp);

    console.log(endereco);
  }

  function addLista() {
    const listas = [];

    const listaTemp = {
      titulo: produto,
      genero: selectedGenero,
      tamanhoLista: tamanhoLista,
      desconto: selectedDesconto,
    };

    listas.push(listaTemp);

    console.log(listas);

    // Atualiza o estado para exibir a mensagem de cadastro efetuado
    setIsCadastroEfetuado(true);
  }

  function resetarTela() {
    // Reseta o estado para ocultar a mensagem de cadastro efetuado
    setIsCadastroEfetuado(false);
    // Limpa os campos de entrada
    setProduto('');
    setSelectedGenero('');
    setTamanhoLista('');
    setSelectedDesconto('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.cima}>
          <Text style={styles.textoTitulo}> Cadastro de Lista </Text>
          <Ionicons name='create-outline' size={55} color={'#ffa500'} />
        </View>

        {isCadastroEfetuado ? (
          <View style={styles.meioDois}>
            <View style={styles.segundoBody}>
              <Text style={styles.tituloBodyDois}>Enforme endereço para entrega</Text>
              <View style={styles.linhaDois}>
                {/* <View style={styles.escritos}>
                  <Text style={styles.textoInputDois}>CEP</Text>
                  <Text style={styles.textoInputDois}>Endereço</Text>
                </View> */}
                <View style={styles.inputViewMenor}>
                  <TextInput 
                    value={cep}
                    onChangeText={setCep} 
                    placeholder={'Digite seu CEP'} 
                    style={styles.inputCep} 
                    />
                </View>
                <View style={styles.direita}>
                  <TouchableOpacity style={styles.butCEP} onPress={buscarCep}>
                    <Text>BUSCAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputView}>
                <TextInput 
                  value={logradouro} 
                  onChangeText={(texto) => setCep(texto)} 
                  placeholder='Lougradoro' 
                  style={styles.inputDois}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput 
                  value={bairro} 
                  onChangeText={(texto) => setCep(texto)} 
                  placeholder='Bairro' 
                  style={styles.inputDois}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput 
                  value={cidade} 
                  onChangeText={(texto) => setCep(texto)} 
                  placeholder='Cidade' 
                  style={styles.inputDois}
                />
              </View>
              <View style={styles.viewUf}>
                <TextInput 
                  value={uf} 
                  onChangeText={(texto) => setCep(texto)} 
                  placeholder='Estado' 
                  style={styles.inputUf}
                />           
              </View>
              <View style={styles.voltarView}>
                <TouchableOpacity style={styles.btnVoltar} onPress={resetarTela}>
                  <Text>Concluído</Text>
                </TouchableOpacity>
              </View>               
            </View>
          </View>
        ) : (
          <View style={styles.meio}>
            <View style={styles.linha}>
              <View style={styles.viewNomeInput}>
                <Text>Produto</Text>
              </View>

              <View style={styles.viewInput}>
                <TextInput value={produto} onChangeText={setProduto} placeholder="Produto" style={styles.input} />
              <View style={styles.linhaHorizontal}></View>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.viewNomeInput}>
                <Text>Gênero</Text>
              </View>
              <View style={styles.viewInput}>
                <View>
                  <RNPickerSelect
                    onValueChange={(value) => setSelectedGenero(value)}
                      items={[
                        { label: 'Ar e Ventilação', value: 'ArVentilação' },
                        { label: 'Áudio', value: 'audio' },
                        { label: 'Celulares', value: 'celulares' },
                        { label: 'Eletrodoméstico', value: 'Eletrodomestico' },
                        { label: 'Eletroportáteis', value: 'Eletroportateis' },
                        { label: 'Esporte e lazer', value: 'esporteLazer' },
                        { label: 'Ferramentas', value: 'Ferramentas' },
                        { label: 'Games', value: 'games' },
                        { label: 'Informática', value: 'informatica' },
                        { label: 'Moda', value: 'moda' },
                        { label: 'Relógios', value: 'relogios' },
                        { label: 'TV', value: 'tv' },
                      ]}
                        placeholder={{ label: 'Selecione o Gênero', value: null }}
                  />
                </View>
              <View style={styles.linhaHorizontal}></View>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.viewNomeInput}>
                <Text>Vagas</Text>
              </View>
              <View style={styles.viewInput}>
                <View>
                  <RNPickerSelect
                    onValueChange={(value) => setTamanhoLista(value)}
                    items={[
                      { label: '10', value: '10' },
                      { label: '50', value: '50' },
                      { label: '150', value: '150' },
                      { label: '300', value: '300' },
                      { label: '500', value: '500' },
                      { label: '700', value: '700' },
                      { label: '1000', value: '1000' },
                    ]}
                      placeholder={{ label: 'Selecione o número de vagas', value: null }}
                    />
                </View>
            <View style={styles.linhaHorizontal}></View>
            </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.viewNomeInput}>
                <Text>Desconto</Text>
              </View>
            <View style={styles.viewInput}>
              <View>
                <RNPickerSelect
                  onValueChange={(value) => setSelectedDesconto(value)}
                  items={[
                    { label: '10%', value: '10' },
                    { label: '20%', value: '20' },
                    { label: '30%', value: '30' },
                    { label: '50%', value: '50' },
                  ]}
                    placeholder={{ label: 'Selecione o Desconto', value: null }}
                  />
              </View>
                <View style={styles.linhaHorizontal}></View>
            </View>
            </View>
        </View>
        )}

        <View style={styles.baixo}>
          {!isCadastroEfetuado ? (
            <TouchableOpacity style={styles.btnCriar} onPress={addLista}>
              <Text>Criar</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      <View style={styles.footer}></View>

      <StatusBar style='auto' />
    </View>
  );
}
