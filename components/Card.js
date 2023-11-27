import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = (props) => {
  const navigation = useNavigation();
  return (
    
     
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navigation.navigate("AcoesPesquisa")}}>
        <Image style={styles.image} source={props.URLImg}/>
        <Text style={{fontFamily:"AveriaLibre-Regular", color:"#3F92C5",fontSize:25}}>{props.titulo}</Text>
        <Text  style={{fontFamily:"AveriaLibre-Regular", color:"#8B8B8B"}}>{props.data}</Text>
        </TouchableOpacity>
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
