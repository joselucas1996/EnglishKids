import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Home from './src/screens/Home';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import Interna from './src/screens/Interna';
import Preload from './src/screens/Preload';
import Funcoes from './src/screens/Funcoes';


const Navegador = createStackNavigator({
  Preload:{
    screen:Preload
  },
  Home: {
    screen: Home
  },
  Cadastro: {
    screen: Cadastro
  },
  Login: {
    screen: Login
  },
  Interna:{
    screen: Interna
  },
  Funcoes: {
    screen: Funcoes
  },
  
},{
  navigationOptions:{
    header:null
  }
}
);

export default Navegador;