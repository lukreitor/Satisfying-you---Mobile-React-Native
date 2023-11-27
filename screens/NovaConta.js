import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import InputPassword from '../components/InputPassword';
import ProjectButton from '../components/ProjectButton';
import GreenButtom from '../components/GreenButtom';

const NovaConta = () => {
  const [submittedValue, setSubmittedValue] = useState('');

  const [submittedValuePswd, setSubmittedValuePswd] = useState('');

  const [submittedValuePswdTwo, setSubmittedValuePswdTwo] = useState('');

  const [passwords, setPasswords] = useState('true');

  const handleTextChange = value => {
    setSubmittedValue(value);
  };

  const handleTextChangePswd = value => {
    setSubmittedValuePswd(value);
  };

  const handleTextChangePswdTwo = value => {
    setSubmittedValuePswdTwo(value);
  };

  return (
    <View style={{backgroundColor: '#372775', flex: 1}}>
      <View style={{flexDirection: 'row', marginBottom: 80}}></View>

      <Input texto="E-mail" onTextChange={handleTextChange} />
      <InputPassword
        texto="Senha"
        isVerified={true}
        onTextChange={handleTextChangePswd}
      />
      <InputPassword
        texto="Repetir senha"
        isVerified={true}
        onTextChange={handleTextChangePswdTwo}
      />

      <GreenButtom
        texto="CADASTRAR"
        valorInput={submittedValue}
        passwordOne={submittedValuePswd}
        passwordTwo={submittedValuePswdTwo}
        textoVerifica="E-mail inválido."
        goTo="Login"
        validacao="1"
      />
    </View>
  );
};

export default NovaConta;
