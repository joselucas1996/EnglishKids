import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from'react-native';


export default class Numero extends Component{
    static navigationOptions = {
        title:"Números",
        header:null
    }
    render(){
        return(
            <ScrollView>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', height:250, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15}}>
                        <Image  source = {require('../imagem/Numeros/0.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', height:250,
                         width:200, alignItems: "center", justifyContent: "center", borderRadius:15}}>
                        <Image  source = {require('../imagem/Numeros/1.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', height:250, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/2.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', height:250, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/3.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', height:250,
                         width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/4.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', 
                        height:250, width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/5.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', height:250,
                         width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/6.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', height:250,
                         width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/7.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', height:250, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/8.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor:'#a6bb24', height:250,
                         width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Numeros/9.png')} 
                            style = {{ height: 150, width: 120, flexDirection:'space-between'}}/> 
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
