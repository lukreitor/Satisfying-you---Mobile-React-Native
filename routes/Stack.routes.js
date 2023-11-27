import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Login from "../screens/Login";
import CustomDrawer from "../components/CustomDrawer";
import NovaPesquisa from "../screens/NovaPesquisa";
import RecuperarSenha from "../screens/RecuperarSenha";
import Coleta from "../screens/Coleta";
import NovaConta from "../screens/NovaConta";
import AcoesPesquisa from "../screens/AcoesPesquisa";
import Agradecimento from "../screens/AgradecimentoParticipacao";
import ModificarPesquisa from "../screens/ModificarPesquisa";
import Relatorio from "../screens/Relatorio";
import DrawerRoutes from "./Drawer.routes";
const Stack = createStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NovaPesquisa"
        component={NovaPesquisa}
        options={{
          headerTitle: "Nova Pesquisa",
          headerStyle: {
            backgroundColor:'#2B1D62'
          },
          headerTitleStyle: {
            color: "#FFF",
            fontSize: 21,
            fontFamily: "AveriaLibre-Regular",
          },
          headerTintColor:'#FFF'
        }}
      />
      <Stack.Screen
        name="RecuperarSenha"
        component={RecuperarSenha}
        options={{ headerTitle: "Recuperação de senha",
        headerStyle: {
          backgroundColor:'#2B1D62'
        },
        headerTitleStyle: {
          color: "#FFF",
          fontSize: 21,
          fontFamily: "AveriaLibre-Regular",
        },
        headerTintColor:'#FFF'
       }}
      />
      <Stack.Screen
        name="Coleta"
        component={Coleta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NovaConta"
        component={NovaConta}
        options={{ headerTitle: "Nova Conta",
        headerStyle: {
          backgroundColor:'#2B1D62'
        },
        headerTitleStyle: {
          color: "#FFF",
          fontSize: 21,
          fontFamily: "AveriaLibre-Regular",
        },
        headerTintColor:'#FFF'
      }}
      />
      <Stack.Screen
        name="AcoesPesquisa"
        component={AcoesPesquisa}
        options={({ route }) => ({ headerTitle:  route.params.nomeItem,
        headerStyle: {
          backgroundColor:'#2B1D62'
        },
        headerTitleStyle: {
          color: "#FFF",
          fontSize: 21,
          fontFamily: "AveriaLibre-Regular",
        }, 
        headerTintColor:'#FFF'
      })}
      />
      <Stack.Screen
        name="Agradecimento"
        component={Agradecimento}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ModificarPesquisa"
        component={ModificarPesquisa}
        options={{ headerTitle: "Modificar pesquisa",
        headerStyle: {
          backgroundColor:'#2B1D62'
        },
        headerTitleStyle: {
          color: "#FFF",
          fontSize: 21,
          fontFamily: "AveriaLibre-Regular",
        },
        headerTintColor:'#FFF'
      }}
      />
      <Stack.Screen
        name="Relatorio"
        component={Relatorio}
        options={{ headerTitle: "",
        headerStyle: {
          backgroundColor:'#2B1D62'
        },
        headerTitleStyle: {
          color: "#FFF",
          fontSize: 21,
          fontFamily: "AveriaLibre-Regular",
        },
        headerTintColor:'#FFF'
      }}
      />
    </Stack.Navigator>
  );
}
