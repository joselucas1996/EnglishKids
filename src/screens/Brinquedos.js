import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from'react-native';



export default class Brinquedos extends Component{
    static navigationOptions = {
        title:"Brinquedos"
    }

    constructor(props) {
        super(props);

        this.voltar = this.voltar.bind(this);
    }

    voltar() {
        this.props.navigation.navigate("Aulas");
    }
    render(){
        return(
            <ScrollView>
                <View style={{ flex:1, flexDirection:'row', backgroundColor: "#079ed4", height:100, marginBottom:10,
                    borderRadius:10, alignItems:"center", borderColor:"#000000", justifyContent:"center"}}>
                    <View>
                        <TouchableOpacity onPress={this.voltar}>
                            <Image source={require('../imagem/voltar.png')} 
                                style={{height:40, width:40, marginRight:90}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:"#FFFFFF", fontSize:30,fontWeight:"900"}}>FRUTAS</Text>
                    </View>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#a6bb24', height:150, 
                         alignItems: "center", justifyContent: "center",marginRight:10, borderRadius:15, borderColor:"#000000"}}>
                        <Image  source = {require('../imagem/Numeros/0.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#a6bb24', height:150,
                         alignItems: "center", justifyContent: "center", borderRadius:15}}>
                        <Image  source = {require('../imagem/Numeros/1.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{ flex:1, backgroundColor:'#a6bb24', height:150, 
                         alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Numeros/2.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#a6bb24', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/3.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#a6bb24', height:150,
                         alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Numeros/4.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#a6bb24', height:150, 
                        alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/5.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1,backgroundColor:'#a6bb24', height:150,
                         alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Numeros/6.png')} 
                            style = {{ height: 120, width: 100,}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#a6bb24', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/7.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#a6bb24', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Numeros/8.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#a6bb24', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/9.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
