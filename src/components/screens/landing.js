import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Landing = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to FireChat</Text>
            <View style={{marginTop:20, width:'70%'}}>
                <Button 
                    buttonStyle={{borderRadius:20}}
                    containerStyle={{marginVertical:5, marginHorizontal:15}}
                    onPress = {() => navigation.navigate('Login')} 
                    title="Log In" 
                    type="solid"
                />

                <Button 
                    onPress = {() => navigation.navigate('Register')} 
                    buttonStyle={{borderRadius:20}}
                    containerStyle={{marginVertical:5, marginHorizontal:15, borderRadius:20}} 
                    title="Sign Up"
                    type="outline" 
                />
            </View>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    header:{
        fontSize:24,
        fontWeight:'bold'
    }
})
