import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView, 
  FlatList,
  Image,
  ListView,
  SafeAreaView
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";

import {collection, initializeFirestore, addDoc, query, onSnapshot} from 'firebase/firestore';
import app from "../firebase/config";

export default function Home() {
  const navigation = useNavigation();

  const [ListaPesquisas, setListaPesquisas] = useState()

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const pesquisaCollection = collection(db, "pesquisas")

  useEffect ( () => {
    const q = query(pesquisaCollection)

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const pesquisas = []
      snapshot.forEach( (doc) => {
        pesquisas.push({
          id: doc.id,
          ...doc.data()
        })
      })

      setListaPesquisas(pesquisas)
    })
  }, [])

  

  return (
    <View style={styles.container}>


      <View style={styles.body}>
        <View style={styles.seacrContainer}>
          <Ionicons name="search" size={32} color="#8B8B8B" />
          <TextInput
            style={styles.inputPesquisa}
            placeholder="Insira o termo de busca..."
          />
        </View>
        
        <SafeAreaView style={styles.cardsContainer} >
        {ListaPesquisas?(ListaPesquisas.map((item) => {
              const idDoItem = item.id;
              const nomeDoItem = item.nome;
              const dataDoItem = item.data;
              const pessimoItem = item.pessimo;
              const ruimItem = item.ruim;
              const neutroItem = item.neutro;
              const bomItem = item.bom;
              const excelenteItem = item.excelente;
              const urlImage = item.imageUrl;
              
            return (
              <View style={styles.containerCard}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("AcoesPesquisa", {
                      idItem: idDoItem,
                      nomeItem: nomeDoItem,
                      dataItem: dataDoItem,
                      pessimoItem: pessimoItem,
                      ruimItem: ruimItem,
                      neutroItem: neutroItem,
                      bomItem: bomItem,
                      excelenteItem: excelenteItem,
                      urlImage: urlImage,
                    });
                  }}
                >



                  <Image
                    style={styles.image}
                    source={{uri: item.imageUrl}}
                  />
                  <Text
                    style={{
                      fontFamily: "AveriaLibre-Regular",
                      color: "#3F92C5",
                      fontSize: 25,
                    }}
                  >
                    {item.nome}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "AveriaLibre-Regular",
                      color: "#8B8B8B",
                    }}
                  >
                    {item.data}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })):null}

        
        </SafeAreaView>

        <TouchableOpacity style={styles.btnNovaPesquisa} onPress={()=>{
          navigation.navigate("NovaPesquisa")
        }} >
          <Text style={{ color: "#FFF", fontSize: 30,fontFamily:"AveriaLibre-Regular" }} >NOVA PESQUISA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  containerCard: {
    backgroundColor: "#FFF",
    margin:"2%",
    width:"45%",
    alignItems:"center",
    borderRadius:5,
    padding:2
  },
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 0.2,
    backgroundColor: "#2B1D62",
    width: "100%",
    justifyContent: "center",
  },
  body: {
    paddingVertical: "10%",
    flex:1,
    backgroundColor: "#372775",
    
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },


  cardsContainer: {
    width: "98%",
    marginVertical: "2%",
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    
  },
  btnNovaPesquisa: {
    width: "90%",
    backgroundColor: "#37BD6D",
    alignItems: "center",
    height: 80,
    justifyContent: "center",
  },
  inputPesquisa: {
    height: 60,
    fontFamily:"AveriaLibre-Regular",
    padding: 5,
    width: "90%",
  },
  seacrContainer: {
    backgroundColor: "#fff",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    
  },
  image:{
    width: 100, 
    height: 100
    }
});
