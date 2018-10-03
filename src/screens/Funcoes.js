import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import ListaFuncoes from '../screens/ListaFuncoes';
import Aulas from '../screens/Aulas';
import Professor from '../screens/Professor';
import Escola from '../screens/Escola';

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
  }
});

export default NavegadorFuncoes;