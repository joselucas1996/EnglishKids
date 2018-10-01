import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import firebase from '../Conexao/FirebaseConnection';
import bgImage from '../imagem/fundo1.jpg'
import logo from '../imagem/logo.png';

export default class Preload extends Component{
    static navigationOptions = {
        title:"Home",
        header: null
    }

    constructor(props) {
        super(props);

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.props.navigation.navigate("Interna")
            } else {
                this.props.navigation.navigate("Home")
            }
        });
    }

    render() {
        return (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
          </ImageBackground>
    );    
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
      flex:1,
      width:null,
      height:null,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent:"center"
      },
      logo: {
        width: 350,
        height:265
      },
});