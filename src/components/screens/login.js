import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Input, Button, SocialIcon } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth} from "../../../firebase/config";

const Login = ({navigation}) => {

    const [ email, setEmail ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState();
    const [ password, setPassword ] = useState("");

    const SignIn = () => {
        setLoading(true);
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            setLoading(false)
            console.log('User sign in successful')
            navigation.replace('Loading')
        })
        .catch(error => {
            setLoading(false)
            setErrorMessage(error.message)
            alert(error.message)
        });
    }

    const SignIn = () => {
        setLoading(true);
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            setLoading(false)
            console.log('User sign in successful')
            navigation.replace('Loading')
        })
        .catch(error => {
            setLoading(false)
            setErrorMessage(error.message)
            alert(error.message)
        });

    }


    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        style={styles.container}
        >
            <View style={styles.loginMenu}>
                <Input
                    placeholder="Email"
                    containerStyle={{marginBottom:5}}
                />
                <Input
                    placeholder = "Password"
                    secureTextEntry = {true}
                    containerStyle={{marginBottom:5}}
                    />
                <Button 
                    title = 'Log In'
                    raised
                    buttonStyle = {{paddingVertical:10}}
                    containerStyle={{marginBottom:10, borderRadius:20, marginHorizontal:15}}/>
                <Button
                    title = 'Log In with Google'
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
                />
            </View>
      </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    loginMenu:{
        marginTop:40,
        width:'80%',
    },
})
