import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from "react-native-vector-icons";
import { Input } from "react-native-elements";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Avatar, ListItem, Divider } from 'react-native-elements';


export default function Search({route, navigation}) {

    const { chatRooms } = route.params

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity key = {item.id} onPress = {() => navigation.replace('ChatRoom', {
                name: item.name,
                avatar: item.avatar
            })}>
                <ListItem>
                    
                {item.avatar!==null
                ? <Avatar 
                    rounded 
                    size="small" 
                    source={{uri: item.avatar}}/> 
                : <Avatar 
                    rounded 
                    size="small"  
                    title={item.name[0].toUpperCase()} 
                    containerStyle={{backgroundColor:'#2196f3'}}/>
                }
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                </ListItem>
            </TouchableOpacity>
        )
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.headerSearch}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'stretch'}}>
                   <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={22} style={{marginTop:10}}/>
                   </TouchableOpacity>
                   <Input 
                        inputStyle={{fontSize:18}}
                        placeholder = "Enter name of chat room" 
                        inputContainerStyle={{width:'80%', borderBottomWidth:0}}
                    />
                </View>
            </View>

            <View style={{marginTop:10}}>
                <TouchableOpacity onPress={() => navigation.navigate('CreateChatRoom')}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', paddingLeft:40}}>
                        <Avatar size="medium" backgroundColor="#2196f3"  rounded icon = {{name:'group', color:'white'}}/>
                        <Text style={{fontSize:18, paddingLeft:10}}>New Group</Text>
                    </View>
                </TouchableOpacity>
            </View>

           <View style={{marginTop:30, paddingHorizontal:20}}>
               <Text style={{marginBottom:20, fontSize:16}}>Chat rooms</Text>
               <FlatList
                keyExtractor={keyExtractor}
                data={chatRooms}
                renderItem={renderItem}
                />
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