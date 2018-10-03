import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from'react-native';

export default class ListaFuncoes extends Component{
    static navigationOptions = {
        title:"EnglishKids",
        header:null
    }
    constructor(props) {
        super(props);
        this.state ={};

        this.Aulas = this.Aulas.bind(this);
        this.Professor = this.Professor.bind(this);
        this.Escola = this.Escola.bind(this);
        this.Sair = this.Sair.bind(this);
    }

    Aulas() {
        this.props.navigation.navigate("Aulas")
    }

    Professor() {
        this.props.navigation.navigate("Professor")
    }
    Escola() {
        this.props.navigation.navigate("Escola")
    }
    Sair() {
        this.props.navigation.navigate("Home")
    }

    

    render() {
        return(
            <View style={styles.tela}>
                <TouchableOpacity onPress={this.Aulas} 
                    style={{ backgroundColor:"#079ed4", height: 200, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems:"center"}}>
                        <Image source={require('../imagem/aulas.png')} 
                            style={styles.listaImagem}/>
                        <View style={{textAlign:"center"}}>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Aulas</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>Aprenda brincando.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Professor} 
                    style={{ backgroundColor:"#a6bb24", height: 200, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems:"center"}}>
                        <Image source={require('../imagem/pro.png')} 
                            style={styles.listaImagem}/>
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Professor</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>Professor onnline</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Escola} 
                    style={{ backgroundColor:"#fcb81c", height: 200, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems: "center"}}>
                        <Image source={require('../imagem/instituicao.png')} 
                            style={styles.listaImagem}/>
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Escola</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>Conheca sua escola.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Sair} 
                    style={{ backgroundColor:"#e35339", height: 200, 
                        flex:1, flexDirection: 'row', alignItems:'center', borderRadius:5}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems:"center"}}>
                        <Image source={require('../imagem/exit.png')} 
                            style={styles.listaImagem}/>
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize:25, fontWeight:'900', textAlignVertical:"center"}}>Sair</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16}}>De uma pausa no estudo.</Text>
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
        height:90,
        width:100,
        marginLeft:25,
        marginRight:25
        
    }
})