import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#173265',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btn:{
      borderWidth:1,
      width:'40%',
      height:'5%',
      alignItems: 'center',
      justifyContent: 'center',
      margin:5,
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
  footer: {
    width: '100%',
    height: '15%',
  },
});