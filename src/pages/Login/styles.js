import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#173265',
      alignItems: 'center',
      justifyContent: 'flex-start',
      
    },
    body:{
      width:'90%',
      height:'90%',
      backgroundColor:'white',
      borderColor:'black',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      marginTop:50,
    },
    cima:{
      width:'100%',
      height: '20%',
      alignItems:'center',
      justifyContent:'center',
      gap:15,
    },
    textoTitulo:{
      fontSize:25,
    },
    meio:{
      width:'100%',
      height: '60%',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
    },
    viewNomeInput:{
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'15%',
      flexDirection:'row'
    },
    viewInput:{
      alignItems:'center',
      justifyContent:'center',
      width:'60%',
      height:'100%',
    },
    viewNome:{
      alignItems:'center',
      justifyContent:'center',
      width:'40%',
      height:'100%',
    },
    input:{
      width:'80%',
      height: '100%',
      textAlign:'center',
      borderBottomWidth:0.5,
      
    },
    baixo:{
      width:'100%',
      height: '20%',
      alignItems:'center',
      justifyContent:'space-evenly',
      flexDirection:'column',
    },
    botaoAdd:{
      height:'35%',
      width:'35%',
      borderWidth:1,
      borderRadius:10,
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    botaoTrc:{
      height:'25%',
      width:'30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer:{
      width:'100%',
      height:'15%',
    },
    textoH1:{
      fontSize:20,
    },
  });