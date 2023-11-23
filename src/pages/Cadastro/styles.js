import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#173265',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 50,
  },
  cima: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  textoTitulo: {
    fontSize: 25,
  },
  meio: {
    width:'100%',
    height: '60%',
    alignItems:'flex-start',
    justifyContent:'space-around',
  },
  tituloBodyDois:{
    fontSize:20
  },
  linha:{
    width:'100%',
    height:'20%',
    flexDirection:"row",
  },
  meioDois:{
    width:'100%',
    height: '60%',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'column',
  },
  viewNomeInput:{
    alignItems:'center',
    justifyContent:'center',
    width:'25%',
    height:'100%',
  },
  viewInput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: '100%',
    
  },
  input:{
    width:'80%',
    height: '10%',
    textAlign:'center',
    paddingTop:15,
    margin:5,
  },
  linhaHorizontal: {
    flexDirection: 'row',
    width: '65%',
    borderWidth: 0.5, 
    margin:5,
  },
  baixo: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  btnCriar: {
    height: '40%',
    width: '45%',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnVoltar: {
    height: '50%',
    width: '40%',
    borderWidth: 1,
    borderRadius:10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCadastro: {
    fontSize: 20,
  },
  footer: {
    width: '100%',
    height: '15%',
  },
  textoH1: {
    fontSize: 20,
  },
  segundoBody:{
    width:'100%',
    height:'100%',
    alignItems:'center',
  },
  linhaDois:{
    width:'100%',
    height:'25%',
    flexDirection:"row",
  },
  inputViewMenor:{
    width: '60%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputCep:{
    width:'70%',
    height: '60%',
    textAlign:'center',
    borderWidth:1,
    borderColor:"black",
    borderRadius:10,
    margin:10
  },
  direita:{
    width:'40%',
    height: '100%',
    justifyContent:'center',
  },
  butCEP:{
    height: '60%',
    width: '70%',
    borderWidth: 1,
    borderRadius:10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    height: '20%',
  },
  inputDois:{
    width:'73%',
    height: '70%',
    textAlign:'center',
    borderWidth:1,
    borderColor:"black",
    marginLeft:10,
    borderRadius:10,
  },
  viewUf:{
    alignItems: 'start',
    justifyContent: 'start',
    width: '100%',
    height: '20%',
  },
  inputUf:{
    width:'40%',
    height: '70%',
    textAlign:'center',
    borderWidth:1,
    borderColor:"black",
    borderRadius:10,
    marginLeft:56,
  },
  voltarView:{
    width: '100%',
    height: '25%',
    alignItems:'center'
  },
});
