import { View, Text ,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meetting",
    customColor : "#745bdf"
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join"
 },
 {
  id: 3,
  name: "calendar",
  title: "Schedule"
 },
 {
  id: 4,
  name: "upload",
  title: "Share Screen"
 }
]

export default function MenuButtons({navigation}) {
  const openMeeting = () => {
    navigation.navigate('Room')
  }
 
  return (
   
    <View style={styles.container}>
    
        {items.map( (item, index) =>   
        <View
        key={index}
        style={styles.buttoncontainer} > 
 <TouchableOpacity 
 onPress={()=>openMeeting()}
 style={{
  ...styles.button,
  backgroundColor: item.customColor ? item.customColor : "#292847"
  }}>
 <FontAwesome name={item.name} size={23} color="#efefef" />
 </TouchableOpacity>
 <Text style={styles.menutext} >{item.title}</Text>
</View>
   )}
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
   marginTop: 22,
   paddingBottom: 10,
   borderBottomColor: "#1f1f1f",
   borderBottomWidth:1,
   flexDirection: 'row',
   justifyContent: 'space-between',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor:'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttoncontainer : {
    alignItems: 'center',
    flex: 1
  },
  menutext: {
    color: "#fff",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600"

  }
})