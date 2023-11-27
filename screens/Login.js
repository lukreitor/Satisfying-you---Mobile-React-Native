import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import InputPassword from '../components/InputPassword';
import ProjectButton from '../components/ProjectButton';
import GreenButtom from '../components/GreenButtom';
import { useNavigation } from "@react-navigation/native";

const Login = (props) => {
  const navigation = useNavigation();

  const [submittedValue, setSubmittedValue] = useState('');
  const [submittedValuePswd, setSubmittedValuePswd] = useState('');



  const handleTextChange = value => {
    setSubmittedValue(value);
  };

  const handleTextChangePswd = value => {
    setSubmittedValuePswd(value);
  };

  return (
    <View style={{backgroundColor: '#372775', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Satisfying.you</Text>

        
      </View>

      <Input texto="E-mail" onTextChange={handleTextChange} />
      <InputPassword
        texto="Senha"
        isVerified={true}
        onTextChange={handleTextChangePswd}
      />

      <GreenButtom 
      texto="Entrar" 
      valorInput={submittedValue} 
      passwordOne={submittedValuePswd} 
      textoVerifica="E-mail e/ou senha inválidos." 
      navigation={props.navigation} 
      validacao = '0' 
      goTo='Home' />
      
      <ProjectButton
        texto="Criar minha conta"
        color="#419ed7"
        marginLeft={45}
        marginTop={150}
        navigateTo="NovaConta"
      />

      <ProjectButton
        texto="Esqueci minha senha"
        color="#b5c7d1"
        marginLeft={45}
        marginTop={20}
        navigateTo="RecuperarSenha"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 100,
    marginLeft: 20,
    justifyContent: 'flex-end',
  },

  text: {
    marginTop: 100,
    marginLeft: 45,
    marginBottom: 40,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 35,
    color: 'white',
    justifyContent: 'flex-start',
  },
});

export default Login;
