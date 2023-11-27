import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ReviewList from '../components/ReviewItem';

const Coleta = (props) => {
 
  const itemId = props.route.params.itemId
  const pessimoItem = props.route.params.pessimoItem;
  const ruimItem = props.route.params.ruimItem;
  const neutroItem = props.route.params.neutroItem;
  const bomItem = props.route.params.bomItem;
  const excelenteItem = props.route.params.excelenteItem; 

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>O que você achou do carnaval 2024?</Text>
        <ReviewList  
        itemId={itemId}
        pessimoItem={pessimoItem}
        ruimItem={ruimItem}
        neutroItem={neutroItem}
        bomItem={bomItem}
        excelenteItem={excelenteItem}
        />
      </View>
    </View>
  );
};

export default Coleta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 300,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
});
