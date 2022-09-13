import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Index'
import MeetingRoom from '../screens/MeetingRoom/Index'

export default function Navigation() {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Home} >
            <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
            <Stack.Screen name="Room" component={MeetingRoom}
             options={{ title: 'Start Meeting',
             headerStyle: {
              backgroundColor: "#1a1a24",
              shadowOpacity: 0
             }, headerTintColor: "white"
             }}  />
        </Stack.Navigator>
    </NavigationContainer>
  )
}