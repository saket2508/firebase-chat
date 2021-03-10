import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { auth } from "../../../firebase/config";

const Loading = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="blue"/>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    }
})
