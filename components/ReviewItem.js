import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {collection, initializeFirestore, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';
import app from "../firebase/config";

const ReviewItem = (props) => {


  const [isPressed, setIsPressed] = useState(false);

  
  const db = initializeFirestore(app, {experimentalForceLongPolling: true})

  const navigation = useNavigation();
  useEffect(() => {
    if (isPressed) {
      
        navigation.navigate('Agradecimento');
   

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isPressed, navigation]);

  const handlePress = (titleName) => {

    const pesquisaRef = doc(db, "pesquisas", props.idItem)

    switch(titleName){

      
      case 'Péssimo': 

        updateDoc(pesquisaRef, {
          pessimo: props.pessimoItem +1,
        })

      break;
      
      case 'Ruim':
        
        updateDoc(pesquisaRef, {
          ruim: props.ruimItem+1,
        })
      break;

      case 'Neutro': 
        updateDoc(pesquisaRef, {
          neutro: props.neutroItem +1,
        })

      break;

      case 'Bom':
        updateDoc(pesquisaRef, {
          bom: props.bomItem +1,
        })
      break;

      case 'Excelente':
        updateDoc(pesquisaRef, {
          excelente: props.excelenteItem +1,
        })
      break;

    }
    setIsPressed(true);

  };
//
  return (
    <TouchableOpacity style={styles.container} onPress={() => {handlePress(props.title)}}>
      <Image source={props.iconSource} style={styles.icon} />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const ReviewList = (props) => {

  const reviews = [
    {
      title: 'Péssimo',
      iconSource: require('../assets/images/icon-pessimo.png'),
    },
    {
      title: 'Ruim',
      iconSource: require('../assets/images/icon-ruim.png'),
    },
    {
      title: 'Neutro',
      iconSource: require('../assets/images/icon-neutro.png'),
    },
    {title: 'Bom', iconSource: require('../assets/images/icon-bom.png')},
    {
      title: 'Excelente',
      iconSource: require('../assets/images/icon-excelente.png'),
    },
  ];

  return (
    <View style={styles.reviewList}>
      {reviews.map((review, index) => (
        <ReviewItem
          key={index}
          title={review.title}
          iconSource={review.iconSource}
          idItem ={props.itemId}
          pessimoItem={props.pessimoItem}
          ruimItem={props.ruimItem}
          neutroItem={props.neutroItem}
          bomItem={props.bomItem}
          excelenteItem={props.excelenteItem}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  reviewList: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default ReviewList;
