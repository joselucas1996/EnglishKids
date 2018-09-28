import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const Navegador = StackNavigator({
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
  }
});
