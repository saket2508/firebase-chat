import React from 'react'
import { View, Text } from 'react-native';
import { Avatar } from "react-native-elements";


export default function ChatHeader({props}) {
    return (
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
            <Avatar rounded size="small" source={{uri: props.route.params.url}}/>
            <Text style={{fontSize:18, marginLeft:5, fontWeight:'bold'}}>{props.route.params.name}</Text>
        </View>
    )
}
