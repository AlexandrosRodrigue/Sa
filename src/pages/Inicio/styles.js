
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewCima: {
        width:'100%',
        height:'20%',
        backgroundColor:'white ',

        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        padding:10
    },
    viewMeio: {
        width:'100%',
        height:'70%',

        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textInt:{
        fontSize:20,
        margin:5,
    },
    viewBaixo: {
        width:'100%',
        height:'10%',

        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    botaoProximo: {
        width:'65%',
        height:'30%',

        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#ffa500',
        backgroundColor:'#ffa500',
        borderRadius:5,

    },
    botaoPular: {

        width:'65%',
        height:'60%',

        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:2,
        borderColor:'#ffa500',
        backgroundColor:'#ffa500',
        borderRadius:5,

    },
    botaoNav:{
    borderWidth:1,
    },
  });