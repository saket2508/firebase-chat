import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar } from "react-native-elements";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/components/screens/home";
import ChatWindow from "./src/components/screens/chatWindow";
import Search from "./src/components/screens/search";
import ChatHeader from "./src/elements/chatHeader";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
              name="ChatWindow" 
              component={ChatWindow} 
              options={({ route }) => ({ 
                title: route.params.name, 
                headerTitle: props => <ChatHeader props = {{props: props, route: route}}/>
              })}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}

