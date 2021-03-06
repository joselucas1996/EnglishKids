import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrowView,
  Dimensions,
  TextInput,
  TouchableOpacity, 
  Image
} from 'react-native';

import firebase from '../Conexao/FirebaseConnection';
import bgImage from '../imagem/fundo1.jpg'
const { width: WIDTH} = Dimensions.get('window')

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailInput:'',
            senhaInput:''
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.voltar = this.voltar.bind(this);
        firebase.auth().signOut();
    }

    cadastrar() {
        if( this.state.emailInput != '' && this.state.senhaInput != '') {

            firebase.auth().onAuthStateChanged((user) => {
                if(user) {

                    let uid = user.uid;

                    firebase.database().ref('users').child(uid).set({
                        nivel:0
                    });
                    this.props.navigation.navigate('Interna');
                }
            });

            firebase.auth().createUserWithEmailAndPassword(
                this.state.emailInput,
                this.state.senhaInput
            ).catch((error) =>{
                alert(error.code);
            });
        }
    }

    voltar() {
        this.props.navigation.navigate('Home');
    }

    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View>
                    <TouchableOpacity style={styles.titulo} onPress={this.voltar}>
                        <Image source={require('../imagem/voltar.png')} style={styles.btnVoltar}></Image>
                        <Text style={styles.text}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                            style={styles.input}
                            placeholder={'E-mail'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid={'transparent'}
                            onChangeText={(emailInput) => this.setState({emailInput})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                            placeholder={'Senha'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid={'transparent'}
                            secureTextEntry = {true}
                            onChangeText={(senhaInput) => this.setState({senhaInput})}
                    />
                </View>

                <View style={styles.botao}>
                    <TouchableOpacity style={styles.btnLogin} onPress={this.cadastrar}>
                    <Image source={require('../imagem/cadastrar.png')} style={styles.btnAcessar}></Image>
                    </TouchableOpacity>
                </View>
        
            </ImageBackground>
        );
    }
} 

const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width:null,
      height:null
    },
    titulo:{
        flexDirection:'row'
    },
    btnVoltar: {
        marginLeft:25,
        marginRight:40,
        marginTop:55,
        height:40,
        width:40
    },
    text: {
        paddingTop:20,
        color:"#FFFFFF",
        fontSize:45,
        fontWeight: '500',
        marginTop: 30,
        marginBottom: 10,
        textAlign:"center"
    },
    inputContainer:{
        marginTop: 10
      },
      input: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 10,
        fontSize: 16,
        paddingLeft: 30,
        backgroundColor: '#87CEFA',
        opacity:0.7,
        color: 'black',
        marginHorizontal: 25
      },
      botao: {
        alignItems: 'center',
        justifyContent:'center',
      },
      btnAcessar: {
        width: 230,
        height:55,
        margin:15,
        alignItems:"center",
        justifyContent:"center"
      },
      textLogin: {
        color: 'white',
        fontSize:22,
        textAlign:'center',
        fontWeight: '100'
      }
});