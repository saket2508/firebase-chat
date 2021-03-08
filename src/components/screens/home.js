import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeHeader from "../../elements/homeHeader";

export default function Home({ navigation }){

    const [ chatList, setChatList ] = useState([
        {
            name: "Leslie Knope",
            avatar_url: "https://i.insider.com/5824aa9046e27a1c008b5eec?width=998&format=jpeg",
            subtitle: "What I hear when I'm being yelled at is people caring loudly at me."
        },
        {
            name: "Tom Haverford",
            avatar_url: "https://i.pinimg.com/originals/a6/55/71/a65571d4a5d34d80ab32a5b07eb78ec5.jpg",
            subtitle: "Oh, what’s this in my shoe? Red carpet insole. Everywhere I go, I’m walking on red carpet."
        },
    ])



    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress = {() => navigation.navigate('ChatWindow', {
            name: item.name,
            url: item.avatar_url
            })}>
            <ListItem>
            <Avatar rounded size="medium" source={{uri: item.avatar_url}}/>
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:'bold'}}>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            </ListItem>
        </TouchableOpacity>
      )

    return(
        <View style={styles.container}>
            <View style={styles.headerHome}>
                <HomeHeader props = {{navigation: navigation}}/>
            </View>
            <View style={styles.chatContainer}>
                    <FlatList
                        keyExtractor={keyExtractor}
                        data={chatList}
                        renderItem={renderItem}
                    />
            </View>
            <View style={styles.floatingActionButton}>
                <Icon onPress={() => navigation.navigate('Search')} reverse raised rounded name="create" size={24} color={'#2196f3'}/>
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
