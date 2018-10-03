import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from'react-native';



export default class Animais extends Component{
    static navigationOptions = {
        title:"Animais"
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
                                style={{height:40, width:40, marginLeft:10, marginRight:85}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:"#FFFFFF", fontSize:30,fontWeight:'900'}}>ANIMAIS</Text>
                    </View>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#079ed4', height:150, 
                         alignItems: "center", justifyContent: "center",marginRight:10, borderRadius:15, borderColor:"#000000"}}>
                        <Image  source = {require('../imagem/Animas/baleia.png')} 
                            style = {{ height: 120, width: 120}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150,
                         alignItems: "center", justifyContent: "center", borderRadius:15}}>
                        <Image  source = {require('../imagem/Animas/cachorro.png')} 
                            style = {{ height: 120, width: 80}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{ flex:1, backgroundColor:'#079ed4', height:150, 
                         alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Animas/cavalo.jpg')} 
                            style = {{ height: 125, width: 120}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#079ed4', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Animas/cobra.png')} 
                            style = {{ height: 110, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#079ed4', height:150,
                         alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Animas/elefante.png')} 
                            style = {{ height: 120, width: 120}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1,backgroundColor:'#079ed4', height:150, 
                        alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Animas/galo.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1,backgroundColor:'#079ed4', height:150,
                         alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Animas/gato.png')} 
                            style = {{ height: 120, width: 100,}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Animas/girafa.png')} 
                            style = {{ height: 130, width: 75}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Animas/golfinho.png')} 
                            style = {{ height: 120, width: 130}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Animas/jacare.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Animas/leao.png')} 
                            style = {{ height: 120, width: 120}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Animas/macaco.jpg')} 
                            style = {{ height: 120, width: 120}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Animas/ovelha.png')} 
                            style = {{ height: 120, width: 120}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Animas/papagaio.png')} 
                            style = {{ height: 115, width: 130}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Animas/polvo.png')} 
                            style = {{ height: 120, width: 120}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Animas/porco.png')} 
                            style = {{ height: 120, width: 90}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Animas/rinoceronte.png')} 
                            style = {{ height: 120, width: 88}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Animas/sapo.png')} 
                            style = {{ height: 120, width: 100}}/> 
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row', justifyContent: "space-between"}}>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150, 
                        width:200, alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10, marginRight:10}}>
                        <Image  source = {require('../imagem/Animas/tartaruga.png')} 
                            style = {{ height: 100, width: 130}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex:1, backgroundColor:'#079ed4', height:150,
                          alignItems: "center", justifyContent: "center", borderRadius:15, marginTop: 10}}>
                        <Image  source = {require('../imagem/Animas/urso.png')} 
                            style = {{ height: 120, width: 80}}/> 
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
