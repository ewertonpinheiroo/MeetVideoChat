import { useState,useEffect } from 'react'
import {Modal,  View, Text, StyleSheet,TextInput,TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import React from 'react'
import {io} from  'socket.io-client'
import StarMeetingRoom from '../../components/StarMeetingRoom/Index'
import { Camera } from 'expo-camera'
import { FontAwesome } from '@expo/vector-icons';
import Chat from '../../components/Chat/Index'

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop-video",
   },
   {
    id: 3,
    name: "upload",
    title: "Share Content",
   },
   {
    id: 4,
    name: "group",
    title: "Participants",
   },
]


let socket;

export default function MeetingRoom() {
const [name, setName] = useState()
const [roomId, setRoomId] = useState()
const [activeUsers, setActiveUsers] = useState([])
const [startCamera, setStartCamera] = useState(false)
const [modalVisible, setModalVisible] = useState(false)

const __startCamera = async () => {
  const {status} = await Camera.requestCameraPermissionsAsync();
  if (status === "granted") {
    setStartCamera(true);
  } else {
    Alert.alert("Access denied")
  }
}

const joinRoom = () => {
  __startCamera();
  socket.emit('join-room', {roomId: roomId, userName: name})
}


useEffect(()=> {
socket = io("http://4606-187-99-225-141.sa.ngrok.io")
console.log('ffff')
socket.on('connection', ()=>console.log("connected"))
socket.on("all-users", users => {
console.log(users, "after clean up")
setActiveUsers(users)
})
},[])


  return (
    <View style={styles.container}>
      {
        startCamera ? (
          <SafeAreaView style={{flex:1}}  >

            <Modal
            animationType="slide"
            transparent={false}
            presentationStyle={"fullScreen"}
            visible={modalVisible}
            onRequestClose={ () => {
             setModalVisible(!modalVisible)
            }}
            >
           <Chat
           modalVisible={modalVisible}
           setModalVisible={setModalVisible}
           />
            </Modal>
          
           <View style={styles.activeUsersContainer} >
           <View style={styles.cameraContainer} >
            <Camera 
         type={"front"}
         style={{ width: activeUsers.length <= 1 ? "100%" : 150,
           height: activeUsers.length <= 1 ? 470 : 150 }}
         >
          </Camera>
          {activeUsers.filter(user => (user.userName != name)).map((user,index) =>
          <View key={index} style={styles.activeUserContainer}>
          <Text style={{ color: "#fff"}}>{user.userName}</Text>
          </View>
          )}
          
            </View>

           </View>
            <View style={styles.menu} >
            { menuIcons.map((icon,index) => 
            <TouchableOpacity
            key={index}
            style={styles.Tile}>
            <FontAwesome name={icon.name} size={24} color="#efefef" />
             <Text style={styles.textTitle}>{icon.title}</Text>
            </TouchableOpacity>
            )}

            <TouchableOpacity
            onPress={()=>setModalVisible(true)}
            style={styles.Tile}>
            <FontAwesome name={"comment"} size={24} color="#efefef" />
             <Text style={styles.textTitle}>Chat</Text>
            </TouchableOpacity>
           
          </View>
        </SafeAreaView>
         
          ) : (
       <StarMeetingRoom
      name={name}
      setName={setName}
      roomId={roomId}
      setRoomId={setRoomId}
      joinRoom={joinRoom} />
          ) }
      
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#191923",
        flex: 1
    },
    Tile: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      marginTop: 15,
  },
    menu :{
      backgroundColor: "#292847",
      flexDirection: 'row',
      justifyContent:'space-around',
      },
    textTitle: {
   color:  'white',
   marginTop:10
    },
cameraContainer: {
  backgroundColor:"black",
  justifyContent: "center",
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
},
activeUserContainer: {
borderColor: "gray",
borderWidth: 1,
width: 150,
height: 150,
justifyContent:'center',
alignItems: 'center'
},
activeUsersContainer: {
  flex: 1,
  justifyContent: 'center',
}
    })