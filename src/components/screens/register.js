import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Input, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth} from "../../../firebase/config";

const Register = ({navigation}) => {

    const [ displayName, setDisplayName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ loadingGoogle, setLoadingGoogle ] = useState(false);

    const emptyState = () => {
        setDisplayName("");
        setEmail("");
        setPassword("");
    }

    const SignUp = async () => {
        if(!loading){
            setLoading(true)
        }
        try{
            await auth.createUserWithEmailAndPassword(email, password);
            const currentUser = auth.currentUser;
            const db = projectFireStore;
            db.collection("users")
                .doc(currentUser.uid)
                .set({
                    email: currentUser.email,
                    displayName: displayName
                  });
            console.log('User sign up successful')
            if(loading){
                setLoading(false)
            }
            emptyState();
            navigation.replace('Loading')
        }
        catch(err){
            if(loading){
                setLoading(false)
            }
            alert(err.message);
        }
    }

    return (
       <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        style={styles.container}
        >
            <View style={styles.registerMenu}>
                <Input 
                    placeholder="Display Name"
                    containerStyle={{marginBottom:5}}
                />
                <Input 
                    placeholder="Email"
                    containerStyle={{marginBottom:5}} 
                />
                <Input
                    placeholder="Password"
                    containerStyle={{marginBottom:5}}
                    secureTextEntry = {true}
                />
                <Button 
                    raised
                    title = "Sign up" 
                    buttonStyle = {{paddingVertical:10}}
                    containerStyle={{marginBottom:10, borderRadius:20, marginHorizontal:15}}/>
                
                <Button 
                    raised
                    icon={
                        <Icon
                          name="google"
                          size={15}
                          style={{paddingLeft:5}}
                          color="white"
                        />
                    }
                    iconRight
                    buttonStyle = {{backgroundColor:'#f44336', paddingVertical:10}}
                    containerStyle={{borderRadius:20, marginHorizontal:15}}
                    title="Sign up with Google"
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    registerMenu:{
        marginTop:40,
        width:'80%',
    },
    heading:{
        marginTop:10,
        fontSize:24,
        color:'black'
    },
})
