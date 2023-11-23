import React, { useState } from 'react';
import {  Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import FeedItem from '../../components/FeedItem/index';

export default function Feed() {
  const nomes = ['a', 'b', 'c', 'd', 'e', 'f', 'g',];
  const [nomesFavoritados, setNomesFavoritados] = useState([]);

  const handleFavoritar = (nome, favoritado) => {
    if (favoritado) {
      setNomesFavoritados([...nomesFavoritados, nome]);
    } else {
      setNomesFavoritados(nomesFavoritados.filter(item => item !== nome));
    }
    console.log(nomesFavoritados);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.viewTitulo}>
          <Text style={styles.textTitle}>
            Listas
          </Text>
        </View>

        {/* Utilize o ScrollView para tornar a viewFeed rolável */}
        <ScrollView 
          style={styles.viewFeedItem}
          showsVerticalScrollIndicator={false}
          >
          <View>
            {nomes.map((nome, index) => (
              <FeedItem key={index} nome={nome} onFavoritar={handleFavoritar} />
            ))}
          </View>
          <View style={{ height: '10%' }}></View>
        </ScrollView>
      </View>
    </View>
  );
}
