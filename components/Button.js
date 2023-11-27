/* eslint-disable prettier/prettier */
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.buttonText}> {props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    margin: 15,
    padding: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Button;
