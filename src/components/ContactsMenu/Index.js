import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const contactsMenuButtons = [
  {
    type:"starred",
    name: "Starred"
  },
  {
    type: "contact",
    name: "ODK Otsuka",
    photo: require("../../assets/stremer1.jpg")
  },
  {
    type: "contact",
    name: "LOUD Coreano",
    photo: require("../../assets/stremer2.jpg")
  },
  {
    type: "contact",
    name: "VK Xarola",
    photo: require("../../assets/stremer3.jpg")
  }
]

export default function ContactsMenu() {
  return (
    <View  style={styles.container}>
      {contactsMenuButtons.map((contact, index) => 
  <View 
  key={index}
  style={styles.row}>
    {contact.type == "starred" ? (
      <View style={styles.starredContainer}>
  <FontAwesome name="star" size={24} color="#efefef" />
  </View> ) :
  (
   <Image source={contact.photo} style={styles.image} />
  )
    }
  
  <Text style={styles.text} >
    {contact.name}
  </Text>
</View>
      )}
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  row: {
    flexDirection: 'row',
    marginTop:20,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    paddingLeft: 15,
    fontSize: 18
  },
  starredContainer: {
   backgroundColor:"#292847",
   width: 55,
   height: 55,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 20
  },
  image : {
    width: 55,
    height: 55,
    borderRadius: 20
  }
})