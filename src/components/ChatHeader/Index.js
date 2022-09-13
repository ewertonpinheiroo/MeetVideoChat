import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function  ChatHeader({ setModalVisible}) {
  return (
    <View style={styles.container}>
       <Pressable
       onPress={() => setModalVisible(false)}
       >
         <Text style={styles.buttonText}>Close</Text>
       </Pressable>
       <Text style={styles.heading} >Chat</Text>
       <Entypo name="bell" size={25} color="#efefef" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingVertical: 20,
       paddingHorizontal: 10
    },
    buttonText: {
   color: "white",
   fontSize: 20
    },
    heading: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",

    }
})