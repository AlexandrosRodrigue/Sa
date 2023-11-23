import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from './src/Routes'
import Login from './src/pages/Login'
import Registro from './src/pages/Registro'
import ListasSalvas from './src/pages/ListasSalvas'
import Inicio from './src/pages/Inicio'
import Opcoes from './src/pages/Opcoes'

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Routes/>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false, title:'Início'}} name="Inicio" component={Inicio}/>
        <Stack.Screen options={{headerShown:false,}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown:false,}} name="Registro" component={Registro}/>
        <Stack.Screen options={{headerShown:true, title:'Minhas listas'}} name="ListasSalvas" component={ListasSalvas}/>
        <Stack.Screen options={{headerShown:false,}} name="Home" component={Home}/>
        <Stack.Screen options={{headerShown:true, title:'Opções'}} name="Opcoes" component={Opcoes}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}







