import React, { Component} from 'react';``
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from'react-native';

import bgImage from '../imagem/fundo1.jpg'
import firebase from '../Conexao/FirebaseConnection';
export default class Interna extends Component{

    constructor(props) {
        super(props);
        console.disableYellowBox = true; 
        
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                
            } else {
                this.props.navigation.navigate("Home")
            }
        });
    }
    static navigationOptions = {
        title: "Interna",
        header:null
    }
    render() {
        return(
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <Text style={styles.hello}>HELLO</Text>
            <Text style={styles.h1}>VENHA APRENDER COMIGO!</Text>
            <Image source={require('../imagem/personagem.png')} 
                style={styles.imgPersonagem}/>
            <View style={styles.botao}>
                    <TouchableOpacity style={styles.btnLogin} onPress={this.logar}>
                    <Image source={require('../imagem/entrar.png')} style={styles.btnAcessar}></Image>
                    </TouchableOpacity>
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
    hello: {
        textAlign:"center",
        color:'blue',
        fontWeight:'800',
        fontSize:50,
        margin:15
    },
    h1: {
        textAlign:"center",
        color:'white',
        fontWeight:'300',
        fontSize:24
    },
    imgPersonagem: {
        width: 150,
        height:300,
        margin:30
    },
    btnAcessar: {
        width: 200,
        height:60,
        marginTop:25,
        alignItems:"center",
        justifyContent:"center"
      }
});