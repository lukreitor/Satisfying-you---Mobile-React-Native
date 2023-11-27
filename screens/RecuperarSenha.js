import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import {useState} from 'react';
import GreenButtom from '../components/GreenButtom';

const RecuperarSenha = props => {


  const [submittedValue, setSubmittedValue] = useState('');

  const handleTextChange = value => {
    setSubmittedValue(value);
  };
  return (
    <View style={{backgroundColor: '#372775', flex: 1,}}>
      <View style={{flexDirection: 'row', marginBottom: 80}}></View>

      <Input texto="E-mail" onTextChange={handleTextChange} style={styles.fontAveriaLibreRegular} />

      <GreenButtom style={styles.fontAveriaLibreRegular}
        texto="RECUPERAR"
        valorInput={submittedValue}
        textoVerifica="E-mail parece ser inválido"
        navigation={props.navigation}
        validacao="2"
        goTo="Login"
      />
    </View>
  );
};

export default RecuperarSenha;
const styles = StyleSheet.create({
  fontAveriaLibreRegular:{
    fontFamily:"AveriaLibre-Regular"
  },
})