import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";



import Home from "../screens/Home";
import Login from "../screens/Login";
import CustomDrawer from "../components/CustomDrawer";
import StackRoute from "../routes/Stack.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2B1D62",
        },
        headerTitle: "",
        headerTintColor:"#FFF",
        drawerStyle: {
          backgroundColor: "#2B1F5C",
          fontFamily: "AveriaLibre-Regular",
          padding:20,
        },
      }}
      drawerContent={(...props) => {
        return <CustomDrawer {...props} />;
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="StackRoute" component={StackRoute} options={{drawerStyle: {display:"none"}}} />

    </Drawer.Navigator>
  );
}
