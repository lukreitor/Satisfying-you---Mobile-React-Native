import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

export default function CustomDrawer() {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView>
      <Text style={styles.userEmail}>usuario@gmail.com</Text>
      <View style={styles.line}></View>
      <DrawerItem
        label="Pesquisa"
        icon={()=>{return(<Feather name="file-text" color="#FFF" size={32}/>);}}
        onPress={() => navigation.navigate("Home")}
        labelStyle={{
          color: "#FFF",
          fontSize: 21,
          fontFamily: "AveriaLibre-Regular",
        }}
        
      />
      <View style={{ marginTop:670,padding:'5%',marginLeft:'5%',width:'90%'}}  >
        <TouchableOpacity onPress={() => navigation.navigate("Login")} >
         <View style={{flex:1,flexDirection: 'row',flexWrap: 'wrap',}}>
          <View style={{width:'30%',}}>
              <Feather name="log-out" color="#FFF" size={32}/>
            </View>
            <Text style={{
              color: "#FFF",
              fontSize: 21,
              fontFamily: "AveriaLibre-Regular",
              width:'70%',
            }}>Sair</Text>
         </View>
          
      
        </TouchableOpacity>
        </View>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
  userEmail: {
    color: "#FFF",
    fontSize: 25,
    fontFamily: "AveriaLibre-Regular",
    textAlign:'center',
  },
  line:{
    width:'100%',
    height:'0.2%',
    backgroundColor:'#FFF',
    flex:0,
    justifyContent:'center',
    
  },
});
