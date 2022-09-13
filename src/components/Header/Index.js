import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';


export default function Header() {
  return (
    <View style={styles.container} >
      <Entypo name="notification" size={24} color="#745bdf" />
       <Text style={styles.heading} > Meet & Chat </Text>
       <Entypo name="new-message" size={24} color="#745bdf" />
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
flexDirection: 'row',
justifyContent: "space-between",
alignItems: "center",
paddingVertical: 20 ,
paddingHorizontal: 10,
  },
  
  heading: {
    color: "#efefef",
    fontSize: 20,
    fontWeight:"700"
    
  }
})