import React, { Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from'react-native';

import bgImage from '../imagem/fundo1.jpg'
import firebase from '../Conexao/FirebaseConnection';
export default class Interna extends Component{

    static navigationOptions = {
        title: "Interna",
        header:null
    }
    
    constructor(props) {
        super(props);
        console.disableYellowBox = true; 

        this.aprender = this.aprender.bind(this);
        
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                
            } else {
                this.props.navigation.navigate("Home")
            }
        });
    }

    aprender() {
        this.props.navigation.navigate("Funcoes");
    }
    render() {
        return(
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <Image source={require('../imagem/hello.png')} style={{ height: 50, width: 300, marginBottom:15, marginTop:30}}/>
            <Image source={require('../imagem/fonte.png')} style={{ height: 20, width: 300}}/>
            
            <Image source={require('../imagem/personagem.png')} 
                style={styles.imgPersonagem}/>
            <View style={styles.botao}>
                    <TouchableOpacity style={styles.btnLogin} onPress={this.aprender}>
                    <Image source={require('../imagem/aprender.png')} style={styles.btnAcessar}></Image>
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
    h1: {
        textAlign:"center",
        color:'white',
        fontWeight:'300',
        fontSize:24
    },
    imgPersonagem: {
        width: 165,
        height:340,
        margin:20
    },
    btnAcessar: {
        width: 200,
        height:60,
        marginTop:25,
        alignItems:"center",
        justifyContent:"center"
      }
});