import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const InputPassword = props => {
  const texto = props.texto;

  const onTextChange = props.onTextChange;

  const isVerified = props.isVerified;

  const [text, setText] = useState('');

  const handleTextChangePswd = value => {
    setText(value);
    if (isVerified) {
      onTextChange(value);
    }
  };

  return (
    <>
      <Text style={styles.texto}>{texto}</Text>

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={text}
        onChangeText={handleTextChangePswd}
        defaultValue={text}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 5,
    marginLeft: 45,
    fontFamily: 'AveriaLibre-Regular',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    color: '#3f92c5',
    width: 320,
  },

  texto: {
    color: 'white',
    marginTop: 30,
    fontFamily: 'AveriaLibre-Regular',
    marginLeft: 45,
    fontSize: 20,
  },
});

export default InputPassword;
