import 'react-native-gesture-handler'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Alert } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Routes from './routes';



export default function App() {
  const [fontsLoaded] = useFonts({
    'AveriaLibre-Regular': require('./assets/fonts/AveriaLibre-Regular.ttf'),
    'AveriaLibre-Bold': require('./assets/fonts/AveriaLibre-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      Alert.alert('ERROR', 'Font AveriaLibre-Regular not setted');
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    
    return null;
  }





  return (
    <Routes/>
   
  );
}

