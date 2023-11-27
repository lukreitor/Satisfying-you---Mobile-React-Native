import { View, Text, Image, StyleSheet } from "react-native";

const Card = (props) => {
    
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.URLImg}/>
      <Text style={{fontFamily:"AveriaLibre-Regular", color:"#3F92C5",fontSize:25}}>{props.titulo}</Text>
      <Text  style={{fontFamily:"AveriaLibre-Regular", color:"#8B8B8B"}}>{props.data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    margin:"2%",
    width:"45%",
    alignItems:"center",
    borderRadius:5,
    padding:2
  },
  image:{
    width: 100, 
    height: 100
    }
  
});

export default Card;
