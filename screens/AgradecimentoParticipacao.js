import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AgradecimentoParticipacao = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Obrigado por participar da pesquisa!</Text>
      <Text style={styles.text}>Aguardamos você no próximo ano!</Text>
    </View>
  );
};

export default AgradecimentoParticipacao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
  },

  text: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 5,
  },
});
