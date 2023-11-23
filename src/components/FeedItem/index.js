import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from 'react';

const FeedItem = ({ nome, onFavoritar }) => {

    const [favoritado, setFavoritado] = useState(false);

    const handleFavoritar = () => {
        setFavoritado(!favoritado);
        onFavoritar(nome, !favoritado);
    };

  return (
    <View style={styles.viewLista}>
            <View style={styles.viewCimaLista}>
                <Text>{nome}</Text>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center',gap:5,}}>
                <FontAwesome 
                name='user'
                size={20} 
                color={'#ffa500'} 
                />
                <Text>0/xxx</Text>
                </View>
            </View>

            <View style={styles.viewBaixoLista}> 
              <TouchableOpacity>
              <FontAwesome 
                name='plus'
                size={33} 
                color={'#ffa500'} 
              />
              </TouchableOpacity>
              <TouchableOpacity title={favoritado ? 'Desfavoritar' : 'Favoritar'} onPress={handleFavoritar} >
              <FontAwesome 
                name='star'
                size={30} 
                color={favoritado ? 'green' : '#ffa500'} 
                  />
              </TouchableOpacity>
            </View>
    </View> 
  );
};

export default FeedItem;

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#173265',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    viewTitulo: {
      width:'40%',
      height:'10%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewFeed: {
      width:'90%',
      height:'90%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    viewLista:{
      width:'100%',
      height:'18%',
      borderColor:'black',
      borderWidth:1,
      justifyContent:'space-between',
      flexDirection:'column',
      padding:5,
      borderRadius:5,
      marginBottom:15,

    },
    viewCimaLista: {
      flexDirection:'row',
      justifyContent:'space-between',
      padding:5,
      
    },
    viewBaixoLista: {
      justifyContent:'space-around',
      flexDirection:'row',
      padding:5,
    },
    body:{
      width:'85%',
      height:'80%',
      backgroundColor:'white',
      borderColor:'black',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      marginTop:50,


    },
    textTitle:{
      fontSize:25,
  
    },
    
  });
