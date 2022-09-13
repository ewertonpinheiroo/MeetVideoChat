import { TouchableWithoutFeedback, Keyboard  ,KeyboardAvoidingView ,View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput} from 'react-native'
import React, {useState} from 'react'
import ChatHeader from '../ChatHeader/Index'
import { FontAwesome } from '@expo/vector-icons';

export default function Chat({ setModalVisible}) {
    const [messageText, setMessageText] = useState()
  return (
    <View style={styles.container}>
        <SafeAreaView style={{height: "100%"}} >
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding": "height"}
            style={{flex:1}}
            >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex:1}}>
        <ChatHeader setModalVisible={setModalVisible} />  

        <View style={styles.chatMessages} >

        </View>
        <View style={styles.chatFormContainer} >
         <Text style={{color: "white"}} > Send to: Everyone </Text>
       </View>
       <View  style={styles.chatForm}>
         <TextInput
         value={messageText}
         onChangeText={text => setMessageText(text)}
         style={styles.textInput}
         placeholderTextColor="#595859"
         placeholder="Tap here to chat"
         />
        <TouchableOpacity
        style={{
            ...styles.button,
            backgroundColor: messageText ? "#6d46f7" : "#292847"
            }}
         >
        <FontAwesome name="send" size={18} color="#efefef" />
        </TouchableOpacity>
       
       </View>
       </View>
       </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
        </SafeAreaView>
   
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a24"
    },
    chatFormContainer: {
        borderColor: "#2f2f2f",
        borderTopWidth: 1,
        padding: 12
    },
    textInput: {
        height: 40,
        color: "#efefef",
        borderColor: "#595859",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
        flex: 1
    },
    chatForm: {
     flexDirection: "row"
    },
    button:{
        height: 40,
        width: 40,
        marginTop: 12,
        marginLeft: 12,
        marginRight: 12,
      
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    chatMessages: {
        flex: 1
    }
})