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

import bgImage from '../imagem/fundo1.jpg'
import logo from '../imagem/logo.png';


const { width: WIDTH} = Dimensions.get('window')

export default class App extends Component {
    static navigationOptions = {
        title:"Home",
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {};
        
        this.registrar = this.registrar.bind(this);
        this.login = this.login.bind(this);
    }

    registrar() {
        this.props.navigation.navigate("Login")
    }

    login() {
        this.props.navigation.navigate("Cadastro")
    }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.viewBotoes}>
          <TouchableOpacity
              style={styles.btnAcessar}
              onPress={this.registrar}
          >
            <Image source={require('../imagem/acessar.png')} style={styles.btnAcessar}></Image>
          </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textoConta}>Não tem conta?</Text>
          </View>
          <TouchableOpacity 
              onPress={this.login}
              >
              <Image source={require('../imagem/cadastre-se.png')} style={styles.btnCadastrar}></Image>
          </TouchableOpacity>
       
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
    width: 300,
    height:240
  },
  viewBotoes: {
    alignItems:"center",
    justifyContent:"center"
  },
  btnAcessar: {
    width: 200,
    height:59,
    margin:10,
    alignItems:"center",
    justifyContent:"center"
  },
  textoConta:{
    color:'#FFFFFF',
    fontSize:22,
    textAlign:"center",
    fontWeight:'700',
    margin:10
  },
  btnCadastrar: {
    width: 230,
    height:55,
    alignItems:"center",
    justifyContent:"center"
  }
});