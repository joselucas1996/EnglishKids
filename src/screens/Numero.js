import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from'react-native';

export default class Numero extends Component{
    static navigationOptions = {
        title:"Números",
        header:null
    }
    render(){
        return(
            <View>
                <Text>Tela dos Numeros</Text>
            </View>
        );
    }
}
