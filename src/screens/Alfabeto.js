import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from'react-native';



export default class Alfabeto extends Component{
    static navigationOptions = {
        title:"Números"
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
                <View style={{ flex:1, flexDirection:'row', backgroundColor: "#079ed4", height:100, marginBottom:10
                    ,borderRadius:10, alignItems:"center", borderColor:"#000000"}}>
                    <View>
                        <TouchableOpacity onPress={this.voltar}>
                            <Image source={require('../imagem/voltar.png')} 
                                style={{height:40, width:40, marginLeft:10, marginRight:70}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:"#FFFFFF", fontSize:30,fontWeight:'900'}}>ALFABETO</Text>
                    </View>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#e35339', height:150, 
                         alignItems: "center", justifyContent: "center",marginRight:10, borderRadius:15, borderColor:"#000000"}}>
                        <Image  source = {require('../imagem/Letras/a.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                         alignItems: "center", justifyContent: "center", borderRadius:15}}>
                        <Image  source = {require('../imagem/Letras/b.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{ flex:1, backgroundColor:'#e35339', height:150, 
                         alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/c.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/d.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#e35339', height:150,
                         alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/e.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#e35339', height:150, 
                        alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/f.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1,backgroundColor:'#e35339', height:150,
                         alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/g.png')} 
                            style = {{ height: 120, width: 100,}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/h.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/i.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/j.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/k.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/l.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/m.jpg')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/n.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/o.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/p.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/q.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/r.jpg')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/s.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/t.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/u.jpg')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/v.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/x.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/w.jpg')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Letras/y.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#e35339', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Letras/z.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
            
            </ScrollView>
        );
    }
}
