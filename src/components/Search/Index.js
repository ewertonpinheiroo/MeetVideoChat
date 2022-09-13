import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={styles.container} >
     <EvilIcons name="search" size={24} color="#fff" />
     <Text style={styles.text} > Search </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: "#745bdf",
  flexDirection: 'row',
  paddingHorizontal: 10,
  height: 40,
  alignItems: 'center',
  borderRadius: 10
  },
  text: {
    color: "#fff",
    paddingLeft: 5
  }
})