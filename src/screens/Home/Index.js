import { View, Text,SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

import Search from '../../components/Search/Index'
import Header from '../../components/Header/Index'
import MenuButtons from '../../components/MenuButtons/Index'
import ContactsMenu from '../../components/ContactsMenu/Index'

export default function Home({navigation}) {
  return (
 <View style={styles.container} >
   <SafeAreaView style={{ height: '100%' }} >
   <Header/>
   <Search/>
   <MenuButtons navigation={navigation} />
   <ContactsMenu/>
   </SafeAreaView>
 </View>
 
  )
}

const styles = StyleSheet.create({
  container: {
 backgroundColor: '#191923',
 padding: 15
  }
})