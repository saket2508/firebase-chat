import React from "react";
import {View, Text} from "react-native";
import { Avatar, Icon } from "react-native-elements";

export default function HomeHeader({props}){
    return(
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                  <Avatar
                    size="small" 
                    rounded
                    title="S"
                    containerStyle={{backgroundColor:'#2196f3'}}
                    onPress={() => console.log("Works!")}
                  />
                  <Text style={{fontSize:20, marginLeft:20, fontWeight:'bold'}}>FireChat</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
                {props.chatRooms ? <Icon rounded name="search" onPress={() => props.navigation.navigate('Search', {
                    chatRooms: props.chatRooms
                })}/> :  <Icon rounded name="search" onPress={() => props.navigation.navigate('Search')}/>}
                <Icon name="more-vert" iconStyle={{marginLeft:20}} onPress={() => {console.log('Menu')}}/>
            </View>
            
        </View> 
    )
}