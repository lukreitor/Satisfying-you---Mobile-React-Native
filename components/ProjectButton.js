import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ProjectButton = (props) => {
  const navigation = useNavigation();

  const {texto, color, marginLeft, marginTop, navigateTo} = props;

  const goToScreen = () => {
    navigation.navigate(navigateTo);
  };

  const buttonStyle = {
    backgroundColor: color || '#419ed7',
    marginLeft: marginLeft || 45,
    marginTop: marginTop || 150,
    width: 320,
    height: 35,
  };

  return (
    <View style={[styles.view, buttonStyle]}>
      <TouchableOpacity onPress={goToScreen}>
        <Text style={styles.text}> {texto} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#419ed7',
    marginLeft: 45,
    marginTop: 150,

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
});

export default ProjectButton;
