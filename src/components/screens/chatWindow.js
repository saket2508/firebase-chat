import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";

export default function ChatWindow({navigation}) {

    const [ messages, setMessages ] = useState([]);
    const [ message, setMessage ] = useState("");

    function renderBubble(props){
        return(
            <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: '#2196f3'
                }
            }}
            textStyle={{
                right:{
                    color:'#fff'
                }
            }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.chatContainer}>
                
            </ScrollView>
            <View style={styles.typingScreen}>
              <View style={styles.typingScreenContainer}>
              <Input
                    onChangeText = {text => setMessage({
                        text: text,
                        time: new Date.now().toLocaleString()
                    })}
                    leftIcon = {<Feather name="smile" size={22}/>}
                    inputContainerStyle={{backgroundColor:'#eee', paddingHorizontal:10, paddingVertical:1, borderBottomWidth:0, borderRadius:30, width:'95%'}}
                    placeholder='Write a message...'
                />
                {message.length >=1 ?  <Icon iconStyle={{alignContent:'stretch'}} rounded reverse name="send" size={18} color={'#2196f3'}/>
                : <Icon iconStyle={{alignContent:'stretch'}} rounded reverse name="add" size={18} color={'#2196f3'} onPress={() => setMessages([...messages, message])}/>
                }
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
    chatContainer:{
        flex:1
    },
    typingScreen:{
        bottom:0,
        position:'absolute',
    },
    typingScreenContainer:{
        paddingHorizontal:10,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
    }
})