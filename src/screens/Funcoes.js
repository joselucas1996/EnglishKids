import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import ListaFuncoes from '../screens/ListaFuncoes';
import Aulas from '../screens/Aulas';
import Professor from '../screens/Professor';
import Escola from '../screens/Escola';
import Numero from '../screens/Numero';
import Alfabeto from '../screens/Alfabeto';
import Cores from '../screens/Cores';
import Animais from '../screens/Animais';
import Brinquedos from '../screens/Brinquedos';
import Objetos from '../screens/Objetos';

const NavegadorFuncoes = createStackNavigator({
  ListaFuncoes: {
      screen: ListaFuncoes
  },
  Aulas: {
      screen:Aulas
  },
  Professor: {
      screen: Professor
  },
  Escola: {
      screen: Escola
  },
  Numero: {
      screen: Numero
  },
  Alfabeto: {
      screen:Alfabeto
  },
  Cores: {
      screen: Cores
  },
  Animais: {
      screen:Animais
  },
  Brinquedos: {
      screen: Brinquedos
  },
  Objetos: {
      screen: Objetos
  }
}
,{
    navigationOptions:{
        header:null
    }
});

export default NavegadorFuncoes;