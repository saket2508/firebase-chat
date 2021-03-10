import React from 'react'
import { View, Text } from 'react-native';
import { Avatar, Icon } from "react-native-elements";


export default function ChatRoomHeader({props}) {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
          {props.route.params.avatar !== null
            ? <Avatar 
                rounded 
                size="small" 
                source={{uri: props.route.params.avatar}}/>
            : <Avatar
                rounded
                size= "small"
                title={props.route.params.name[0].toUpperCase()} 
                containerStyle={{backgroundColor:'#2196f3'}}/>
            }
            <Text style={{fontSize:18, marginLeft:5, fontWeight:'bold'}}>{props.route.params.name}</Text>
          </View>

          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
            <Icon name="more-vert"/>
          </View>
        </View>
    )
}
