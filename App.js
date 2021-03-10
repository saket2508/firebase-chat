import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar } from "react-native-elements";
import { createStackNavigator } from '@react-navigation/stack';

// custom header components
import ChatRoomHeader from "./src/elements/chatRoomHeader";


// screens
import Home from "./src/components/screens/home";
import ChatRoom from "./src/components/screens/chatRoom";
import Search from "./src/components/screens/search";
import CreateChatRoom from "./src/components/screens/createChatRoom";
import Login from "./src/components/screens/login";
import Register from "./src/components/screens/register";
import Landing from "./src/components/screens/landing";
import Loading from "./src/components/screens/loading";


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName = "Landing"
          >
        <Stack.Screen 
            name="Landing" 
            component={Landing} 
            options = {{ 
              headerShown:false
              }}
            />
            <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{
              headerTransparent: true,
              title:'Sign in'
            }}
            />
            <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{
              headerTransparent: true,
              title:'Sign Up'
            }}
            />
            <Stack.Screen 
            name="Loading" 
            component={Loading} 
            options = {{ 
              headerShown:false
              }}
            />
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options = {{ 
              headerShown:false
              }}
            />
            <Stack.Screen 
              name="Search" 
              component={Search} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="CreateChatRoom" 
              component={CreateChatRoom} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="ChatRoom" 
              component={ChatRoom} 
              options={({ route }) => ({ 
                title: route.params.name, 
                headerTitle: props => <ChatRoomHeader props = {{props: props, route: route}}/>
              })}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}

