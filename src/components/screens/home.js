import React, { useState, useEffect } from "react";
import { ActivityIndicator, Pressable } from "react-native";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeHeader from "../../elements/homeHeader";

import { Firestore } from "../../../firebase/config";
export default function Home({ navigation }){

    const [ availableChatRooms, setAvailableChatRooms ] = useState([])
    const [ loading, setLoading ] = useState(true);

    const keyExtractor = (item, index) => index.toString();

    useEffect(() => {
        const unsubscribe = Firestore
            .collection('MESSAGE_THREADS')
            .orderBy('latestMessage.createdAt', 'desc')
            .onSnapshot(querySnapshot => {
                const threads = querySnapshot.docs.map(documentSnapshot => {
                    return {
                        _id: documentSnapshot.id,
                        name: '',
                        latestMessage: { text: '' },
                        ...documentSnapshot.data()
                    }
                })

                setAvailableChatRooms(threads)
                console.log(threads)
                if(loading){
                    setLoading(false)
                }
            })

            return () => unsubscribe()
    }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity key={item.id} onPress = {() => navigation.navigate('ChatRoom', {
                name: item.name,
                avatar: item.avatar
            })}>
            <ListItem>

           {item.avatar!==null
           ? <Avatar 
                rounded 
                size="medium" 
                source={{uri: item.avatar}}/> 
            : <Avatar 
                rounded 
                size="medium"  
                title={item.name[0].toUpperCase()} 
                containerStyle={{backgroundColor:'#2196f3'}}/>
            }

            <ListItem.Content>
                <ListItem.Title style={{fontWeight:'bold'}}>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.latestMessage.text}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            </ListItem>
        </TouchableOpacity>
      )

      if(loading){
          return(
              <View style={styles.container}>
                <View style={styles.headerHome}>
                    <HomeHeader props = {{navigation: navigation}}/>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size="large" color={"#2196f3"}/>
                </View>
                <View style={styles.floatingActionButton}>
                    <Icon onPress={() => navigation.navigate('Search')} reverse raised rounded name="create" size={24} color={'#2196f3'}/>
                </View>
              </View>
          )
      }

    return(
        <View style={styles.container}>
            <View style={styles.headerHome}>
                <HomeHeader props = {{navigation: navigation, chatRooms: availableChatRooms}}/>
            </View>

            <View style={styles.chatContainer}>
                    <FlatList
                        keyExtractor={keyExtractor}
                        data={availableChatRooms}
                        renderItem={renderItem}
                    />
            </View>
            
            <View style={styles.floatingActionButton}>
                <Icon onPress={() => navigation.navigate('Search', {
                    chatRooms: availableChatRooms
                })} reverse raised rounded name="create" size={24} color={'#2196f3'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    headerHome:{
        marginTop:50,
        marginHorizontal:20
    },
    chatContainer:{
        marginTop:20,
        paddingHorizontal:5
    },
    floatingActionButton:{
        bottom:20,
        right:20,
        position:'absolute'
    }
})
