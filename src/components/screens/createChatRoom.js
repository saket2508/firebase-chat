import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Platform, Pressable, Alert  } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from "react-native-vector-icons";
import { Input } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Avatar } from 'react-native-elements';

import { Firestore } from "../../../firebase/config";

export default function CreateChatRoom({navigation}) {
    const [groupAvatar, setGroupAvatar] = useState(null);
    const [groupName, setGroupName] = useState(null);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setGroupAvatar(result.uri);
        }
      };

      const handleSubmit = () => {
          Firestore
            .collection('MESSAGE_THREADS')
            .add({
                name: groupName,
                avatar: groupAvatar,
                latestMessage: {
                    text: `${groupName} created. Welcome.`,
                    createdAt: new Date().getTime()
                }
            }).then(() => {
                navigation.replace('Home')
            }).catch(error => {
                alert(error.message)
                console.error(error)
            })
      }
    

    return (
        <View style={styles.container}>
            <View style={styles.createRoomHeader}>
                <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                   <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={22} style={{marginTop:10}}/>
                   </TouchableOpacity>
                  <Text style={{fontSize:18, paddingLeft:20, paddingTop:5}}>Name this group</Text>
                </View>
            </View>

            <View style={{marginTop:50, marginHorizontal:30}}>
                <View style={{flexDirection:'row', alignItems:'stretch', justifyContent:'flex-start'}}>
                    <Pressable onPress={() => pickImage()}>
                        {groupAvatar === null ? <Avatar rounded size="medium" backgroundColor="#2196f3" icon = {{name:'camera-alt', color:'white'}}/>
                            : <Avatar 
                            rounded 
                            size="medium" 
                            source={{
                                uri: groupAvatar
                              }}/>
                        }
                    </Pressable>
                    <Input
                        inputStyle={{fontSize:18}}
                        placeholder="Group Name (required)"
                        inputContainerStyle={{borderBottomWidth:0, width:'80%'}}
                        onChangeText = {text => setGroupName(text)}
                        />  
                </View>
            </View>

            <View style={styles.submitButton}>
            <Button
                disabled = {groupName===null || groupName===""}
                containerStyle={{borderRadius:30}}
                buttonStyle={{paddingVerical:45, paddingHorizontal:15}}
                title="CREATE"
                onPress = {() => handleSubmit()}
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
    createRoomHeader:{
        marginTop:50,
        marginHorizontal:20
    },
    submitButton:{
        bottom:20,
        right:20,
        position:'absolute'
    }
})
