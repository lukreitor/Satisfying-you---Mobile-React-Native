import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CardComp from '../components/CardComp';

const AcoesPesquisa = ( props ) => {

  const itemId = props.route.params.idItem
  const itemNome = props.route.params.nomeItem
  const itemData = props.route.params.dataItem
  const pessimoItem = props.route.params.pessimoItem;
  const ruimItem = props.route.params.ruimItem;
  const neutroItem = props.route.params.neutroItem;
  const bomItem = props.route.params.bomItem;
  const excelenteItem = props.route.params.excelenteItem;
  const imageItem = props.route.params.urlImage;

  

  const cardData = [
    {
      title: 'Modificar',
      imageSource: require('../assets/images/icon-card-modif.png'),
      screenName: 'ModificarPesquisa',
    },
    {
      title: 'Coletar Dados',
      imageSource: require('../assets/images/icon-card-coletar.png'),
      screenName: 'Coleta',
    },
    {
      title: 'Relatório',
      imageSource: require('../assets/images/icon-card-relat.png'),
      screenName: 'Relatorio',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const handleCardPress = index => {
    setCurrentIndex(index);
    const selectedCard = cardData[index];
    navigation.navigate(selectedCard.screenName);
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.carousel}
        onScroll={event => {
          const offset = event.nativeEvent.contentOffset.x;
          const index = Math.round(offset / 280);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={200}>
        {cardData.map((card, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardPress(index)}>
            <CardComp
              key={index}
              data={card}
              navigation={navigation} // Pass the navigation prop here
              pesquisaId={itemId}
              pesquisaNome={itemNome}
              pesquisaData={itemData}
              pesquisaPessimo={pessimoItem}
              pesquisaRuim={ruimItem}
              pesquisaNeutro={neutroItem}
              pesquisaBom={bomItem}
              pesquisaExcelente={excelenteItem}
              pesquisaImage = {imageItem}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: '#372775',
    height: '100%',
  },
  carousel: {
    alignItems: 'center',
  },
});

export default AcoesPesquisa;
