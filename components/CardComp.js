import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const CardComp = ({data, navigation, pesquisaId, pesquisaNome, pesquisaData, pesquisaPessimo, pesquisaRuim,pesquisaNeutro ,pesquisaBom, pesquisaExcelente, pesquisaImage}) => {
  // Receive the navigation prop
  const {title, imageSource} = data;

  const handleCardPress = title => {
    switch (title) {
      case 'Modificar':
        navigation.navigate('ModificarPesquisa', {
          itemId: pesquisaId,
          itemNome: pesquisaNome,
          itemData: pesquisaData,
          itemImage: pesquisaImage,
        });
        break;
      case 'Coletar Dados':
        navigation.navigate('Coleta', {
          itemId: pesquisaId,
          itemNome: pesquisaNome,
          itemData: pesquisaData,
          pessimoItem:pesquisaPessimo,
          ruimItem:pesquisaRuim,
          neutroItem:pesquisaNeutro,
          bomItem:pesquisaBom,
          excelenteItem:pesquisaExcelente,
        });

        break;
      case 'Relatório':
        navigation.navigate('Relatorio',{
          pessimoItem:pesquisaPessimo,
          ruimItem:pesquisaRuim,
          neutroItem:pesquisaNeutro,
          bomItem:pesquisaBom,
          excelenteItem:pesquisaExcelente,
        });
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleCardPress(title)}>
      <View style={styles.cardContent}>
        <Image source={imageSource} style={styles.icon} />
        <Text variant="titleLarge" style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 280,
    backgroundColor: '#312464',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 60,
    marginLeft: 60,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
});

export default CardComp;
