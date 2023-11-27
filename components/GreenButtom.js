import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';

const GreenButtom = props => {
  const texto = props.texto;
  const valorInput = props.valorInput;
  const textoVerifica = props.textoVerifica;
  const passwordOne = props.passwordOne;
  const passwordTwo = props.passwordTwo;
  const validacao = props.validacao;
  const goTo = props.goTo;

  const [shouldShow, setShouldShow] = useState(false);

  const [shouldShowPswd, setShouldShowPswd] = useState(false);

  const navigateTo = () => {
    props.navigation.navigate('Home');
  };

  const verificaEmail = () => {
    const enderecos = [
      '@gmail.com',
      '@hotmail.com',
      '@outlook.com',
      '@alunos.utfpr.edu.br',
    ];

    if (!enderecos.some(email => valorInput.includes(email))) {
      setShouldShow(true);
    } else {
      setShouldShow(false);

      if (validacao === '0') {

        console.log("\n\n\nAQUI " + passwordOne + "\n\n\n")

        signInWithEmailAndPassword(auth_mod, valorInput, passwordOne)
          .then((userLogged) => {
            console.log("Usuario autenticado com sucesso: " + JSON.stringify(userLogged))
            navigateTo({goTo});
          })
          .catch((error) => {
            console.log("Falha ao autenticar o usuario: " + JSON.stringify(error))
            setShouldShow(true);
            
          })

        
      }else if (validacao === '2') {
        sendPasswordResetEmail(auth_mod, valorInput).then(() =>{
          console.log("E-mail de redefinição enviado com sucesso, verifique sua caixa de entrada.")
        }).catch((error) => {
          console.log("Falha ao enviar e-mail de redefinição. " + error)
        })

        return;
      }

      
    }

    if (passwordOne === passwordTwo) {
      setShouldShowPswd(false);
      if (validacao === '1') {

        createUserWithEmailAndPassword(auth_mod, valorInput, passwordOne).then((userCredential) => {
          console.log("Usuário Criaco com sucecsso: " + JSON.stringify(userCredential))
        }).catch((error) => {
          console.log("Erro ao criar usuário: " + JSON.stringify(error))
        })

        //navigateTo({goTo});
      }
    } else {
      setShouldShowPswd(true);
    }
  };

  return (
    <>
      {shouldShow ? (
        <Text style={styles.verificationText}>{textoVerifica}</Text>
      ) : null}

      {shouldShowPswd ? (
        <Text style={styles.verificationText}>
          O campo repetir senha difere da senha
        </Text>
      ) : null}

      <View style={styles.view}>
        <TouchableOpacity onPress={verificaEmail}>
          <Text style={styles.text}> {texto} </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#49b976',
    marginLeft: 45,
    marginTop: 60,

    width: 320,
    height: 35,
  },

  text: {
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    marginTop: 2,
    color: 'white',
    fontSize: 20,
  },

  verificationText: {
    //fontFamily: 'AveriaLibre-Regular',
    marginLeft: 45,
    fontSize: 15,
    color: '#FD7979',
  },
});

export default GreenButtom;
