import React from "react";
import {
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { useState, useEffect,useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; 
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { Feather } from "@expo/vector-icons";
import {collection, initializeFirestore, addDoc} from 'firebase/firestore';
import app from "../firebase/config";
import {storage} from '../firebase/config'
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

const NovaPesquisa = () => {
  //------navigation-----------------------------------------------------------------
  const navigation = useNavigation();

  //------------useStates---------------
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, sethasPermission] = useState(null);
  const [showCamera, setshowCamera] = useState(false);
  const camRef = useRef(null)


  const [selectedDate, setSelectedDate] = useState("");
  const [errorNome, setErrorNome] = useState(false);
  const [errorData, setErrorData] = useState(false);
  const [nome, setNome] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [image, setImage] = useState(null);

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const pesquisaCollection = collection(db, "pesquisas")
  
  const addPesquisa = async () => {
    

    const imageRef = ref(storage, nome+"imagem.jpeg")
    const file = await fetch(image)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, {contentType:'image/jpeg'})
      .then(
        () => {
          
          getDownloadURL(imageRef)
            .then(
              (url) => {

                const docPesquisa = {
                  nome: nome,
                  data: selectedDate,
                  pessimo: 0,
                  ruim: 0,
                  neutro: 0,
                  bom: 0,
                  excelente: 0,
                  imageUrl: url
                }

                addDoc(pesquisaCollection, docPesquisa).then( (docRef) => {
                  console.log("Novo documento inserido com sucesso: " + docRef.id)
                }).catch( (erro) => {
                  console.log("Erro: " + erro)
                })
              }
            )
            .catch
              ((error) => {
                console.log("\n\n\nErro pegar url " + JSON.stringify(error))
              })
        }
      )
      .catch(
        (error) => {
          console.log("\n\n\nErro ao enviar o arquivo: " + JSON.stringify(error))
        }

      )
    
    

  }


  //--------save function -------------------------------------------------------------------
  const goToScreen = () => {
    if (!selectedDate) {
      setErrorData(true);
    } else {
      setErrorData(false);
    }

    if (!nome) {
      setErrorNome(true);
    } else {
      setErrorNome(false);
    }

    navigation.navigate("Home");
  };

  //---------Date Select Functio ------------------------------------------------------
  const handleDateChange = (propDate) => {
    setSelectedDate(propDate);
    setShowDatePicker(false);
    if (selectedDate) {
      setErrorData(false);
    }
  };

  //------Chose camera or galery ------------------------------------------------------------
  const handleImageUser = () => {
    Alert.alert("Selecione", "De onde você quer pegar a foto", [
      {
        text: "Galeria",
        onPress: () => {
          pickeImageGalery();
        },
        style: "default",
      },
      {
        text: "Câmera",
        onPress: () => {
          pickeImageCamera();
        },
        style: "default",
      },
    ]);
  };

  //--------galery---------------------------------------------------------------------
  const pickeImageGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  //--------------------camera ------------------------------------------------------------
  useEffect(()=>{
    (async ()=>{
      const {status} = await Camera.requestCameraPermissionsAsync();
      sethasPermission(status === 'granted');
    })();

    if(hasPermission === null){
      return <View><Text>Sem Acesso</Text></View>
    }
    if(hasPermission === false){
      return <View><Text>Acesso Negado</Text></View>
    }

  },[]);

  const pickeImageCamera = () => {
    setshowCamera(true);
  };

  const flipCamera = ()=>{
    if(type == Camera.Constants.Type.back){
      setType(Camera.Constants.Type.front)
    }
    if(type == Camera.Constants.Type.front){
      setType(Camera.Constants.Type.back)
    }
  }

  const takeAPicture =async ()=>{
    if(camRef){
      const data = await camRef.current.takePictureAsync()
      setImage(data.uri);
      setshowCamera(false);
    }


  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            onChangeText={(text) => setNome(text)} // Atualiza o estado 'nome'
          />
          {errorNome && (
            <Text style={styles.errorText}>Preencha o nome da pesquisa</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data</Text>
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => setShowDatePicker(!showDatePicker)}
          >
            <View style={styles.datePickerContent}>
              {selectedDate ? (
                <Text style={styles.datePickerText}>{selectedDate}</Text>
              ) : null}
              <Icon
                name="calendar"
                size={20}
                color="#333"
                style={styles.datePickerIcon}
              />
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showDatePicker}
            >
              <View style={styles.datePickerModalMainView}>
                <View style={styles.datePickerModal}>
                  <View style={styles.datePickerModalView}>
                    <DatePicker
                      mode="calendar"
                      selected={selectedDate}
                      onDateChange={handleDateChange}
                    />
                    <TouchableOpacity
                      onPress={() => setShowDatePicker(!showDatePicker)}
                    >
                      <Text style={styles.closeButton}>Fechar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          {errorData && <Text style={styles.errorText}>Preencha a data</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Imagem</Text>
          <TouchableOpacity style={styles.imageInput} onPress={handleImageUser}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 60 }}
              />
            ) : (
              <Text style={styles.imageInputText}>
                Câmera/Galeria de Imagens
              </Text>
            )}
          </TouchableOpacity>
          <Modal animationType="slide" transparent={true} visible={showCamera}>
            <Camera
            style={{flex:1}}
              type={type}
              ref={camRef}
            >
              <View style={{flex:1, height:'100%',flexDirection: "row",justifyContent:'space-between',padding:10,}}>
                <TouchableOpacity style={{ height:'5%'}} onPress={()=>{flipCamera()}}><Feather name="refresh-ccw" color="#FFF" size={40}/></TouchableOpacity>
                <TouchableOpacity style={{alignSelf:'flex-end', height:'10%'}} onPress={()=>{takeAPicture()}} ><Feather name="camera" color="#FFF" size={60} /></TouchableOpacity>
                <TouchableOpacity style={{ height:'5%'}} onPress={()=>{setshowCamera(false)}}><Feather name="x-circle" color="#FFF" size={40}/></TouchableOpacity>
              </View>
                </Camera>
          </Modal>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {addPesquisa()}}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // Add background color if needed
    backgroundColor: "#372775",
  },
  form: {
    flexDirection: "column",
    alignSelf: "stretch", // Isso faz com que o formulário ocupe toda a largura horizontal
    padding: 16,

    // Add background color if needed
  },
  inputContainer: {
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 8,
    color: "#fff",
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  imageInputText: {
    fontSize: 10, // Defina o tamanho de fonte desejado aqui
  },
  datePickerIcon: {
    marginLeft: "auto", // Isso alinhará o ícone à direita
  },
  imageInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
    cursor: "pointer",
    width: "80%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: 12,
    color: "#fd7979",
  },
  button: {
    padding: 8,
    marginTop: 16,
    height: 56,
    borderRadius: 4,
    backgroundColor: "#37bd6d",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  datePicker: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  datePickerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  datePickerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  datePickerModalView: {
    margin: 20,
    borderColor: "#333",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    alignItems: "center",
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  datePickerModalMainView: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
  },
  datePickerText: {
    color: "#333",
    fontFamily: "AveriaLibre-Regular",
  },
  closeButton: {
    fontFamily: "AveriaLibre-Bold",
    fontSize: 25,
    marginBottom: 5,
  },
});

export default NovaPesquisa;
