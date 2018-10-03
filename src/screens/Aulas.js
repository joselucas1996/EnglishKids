import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from'react-native';

export default class Aulas extends Component{
    static navigationOptions = {
        title:"Aulas",
        header:null
    }
    constructor(props) {
        super(props);
        this.state ={};

        this.Numero = this.Numero.bind(this);
        this.Alfabeto = this.Alfabeto.bind(this);
        this.Cores = this.Cores.bind(this);
        this.Animais = this.Animais.bind(this);
        this.Brinquedos = this.Brinquedos.bind(this);
        this.Objetos = this.Objetos.bind(this);
    }

    Numero() {
        this.props.navigation.navigate("Numero")
    }

    Alfabeto() {
        this.props.navigation.navigate("Alfabeto")
    }
    Cores() {
        this.props.navigation.navigate("Cores")
    }
    Animais() {
        this.props.navigation.navigate("Animais")
    }
    Brinquedos() {
        this.props.navigation.navigate("Brinquedos")
    }
    Objetos() {
        this.props.navigation.navigate("Objetos")
    }

    

    render() {
        return(
            <View style={styles.tela}>
                <TouchableOpacity onPress={this.Numero} 
                    style={{ backgroundColor:"#a6bb24", height: 300, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderBottomLeftRadius:5, borderBottomLeftRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems:"center"}}>
                        <Image source={require('../imagem/Numeros/1.png')} 
                            style={{height:85, width:64, marginTop:13, marginLeft:25, marginRight:25}}/>
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Números</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>Venha aprender os números.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Alfabeto} 
                    style={{ backgroundColor:"#e35339", height: 200, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems:"center"}}>
                        <Image source={require('../imagem/Letras/a.png')} 
                            style={styles.listaImagem}/>
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Alfabeto</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>Venha aprender o alfabeto.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Cores} 
                    style={{ backgroundColor:"#fcb81c", height: 200, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems: "center"}}>
                        <Image source={require('../imagem/Cores/azul.png')} 
                            style={styles.listaImagem}/>
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Cores</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>Venha aprender cores.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Animais} 
                    style={{ backgroundColor:"#079ed4", height: 200, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems:"center"}}>
                        <Image source={require('../imagem/Animas/cachorro.png')} 
                            style={styles.listaImagem}/>
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Animais</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>Venha aprender animais.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Brinquedos} 
                    style={{ backgroundColor:"#008B8B", height: 200, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems:"center"}}>
                        <Image source={require('../imagem/Frutas/uva.png')} 
                            style={styles.listaImagem}/>
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Frutas</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>Venha aprender frutas.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Objetos} 
                    style={{ backgroundColor:"#FF8C00", height: 200, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems:"center"}}>
                        <Image source={require('../imagem/Comidas/hamburguer.png')} 
                            style={{height:70, width:65, marginLeft:25, marginRight: 25}}/>
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Comidas</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>Venha aprender comidas.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        flex:1,
        backgroundColor:"#cccc"
    },
    cardAulas: {
        backgroundColor: '#000000',
        height:250,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    listaImagem: {
        height:85,
        width:64,
        marginLeft:25,
        marginRight:25
        
    }
})