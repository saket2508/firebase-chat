import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from "react-native-vector-icons";
import { Input } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Search({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.headerSearch}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                   <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={22} style={{marginTop:10}}/>
                   </TouchableOpacity>
                   <Input 
                        placeholder = "Enter name or number" 
                        inputContainerStyle={{width:'80%', borderBottomWidth:0}}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    headerSearch:{
        marginTop:50,
        marginHorizontal:20
    }
})