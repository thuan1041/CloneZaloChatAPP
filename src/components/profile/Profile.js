import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from  'react-native-safe-area-context'
import { styles } from './style'
import { Text, View, TextInput, Pressable, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faChevronLeft, faCircleCheck, faEllipsis, faGear, faMessage, faPhone, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from '../../config/axios';
import Toast from 'react-native-easy-toast';
import { useSelector } from 'react-redux';
import { socket } from '../../config/io';

export const Profile = ({navigation, route}) => {
  const {items } = route.params;
  console.log("items: ", items);
  const [isFriend, setIsFriend] = useState(null);
  const friendList = useSelector(state => state.listFriend);
  console.log("friendList: ", friendList.listFriend);
  const [isCheck, setIsCheck] = useState(true);
  const toastRef = useRef(null);

  useEffect(() => {
    socket.then(socket => {
        socket.emit('setup');
        socket.on('connected', () => {
            console.log('Connected to server');
        });
    });
    return () => {
        socket.then(socket => {
            socket.off('connected');
        });
    };
  }, []); 

  useEffect(() => {
    handleIsFriend()
  },[isFriend])

  const handleIsFriend = async () => {
    for(let i = 0; i < friendList.listFriend.length; i++){
      if(items.id === friendList.listFriend[i].id || items.userId === friendList.listFriend[i].id){
        return setIsFriend(true)
      }
    }
  }

  const handleSendRequestAddFriend = async () => {
    try {
      const res = await axios.post(`/users/friendShip`,{ userId: items.id,
        content:"Xin chào, tôi muốn kết bạn với bạn"
      })
      console.log("res: ", res);
      if(res.errCode === 0){
        setIsCheck(false)
        // socket.then(socket => {
        //   socket.emit('send-add-friend', res.data);
        //   console.log("res.data: ", res.data, socket.id);
        // })
        socket.then(socket => {
          socket.emit('send-add-friend', items);
        })

        toastRef.current.show('Đã gởi yêu cầu kết bạn đến người này!', 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={()=>{
          // navigation.navigate('ChatMessageOptions', {items:items})
          navigation.goBack()
        }}>
          <FontAwesomeIcon style={{marginLeft: 15}} color='#FFFFFF' size={21} icon={faChevronLeft} />
        </Pressable>
        <View style={{flexDirection:'row'}}>
          <Pressable onPress={() => {
          }} style={{padding:8}}>
            <FontAwesomeIcon style={{marginLeft: 0}} color='#FFFFFF' size={22} icon={faPhone} />
          </Pressable>
          <Pressable onPress={() => {
          }} style={{padding:8}}>
            <FontAwesomeIcon style={{marginLeft: 15}} color='#FFFFFF' size={22} icon={faGear} />
          </Pressable>
          <Pressable onPress={() => {
            navigation.navigate('ProfileOptions', {items: items})
          }} style={{padding:8}}>
            <FontAwesomeIcon style={{marginLeft: 15, marginRight:15}} color='#FFFFFF' size={22} icon={faEllipsis} />
          </Pressable>
        </View>
      </View>

      <View style={{height:"40%",}}>
        <Image source={require("../../../assets/img/bg_pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg")} style={{height:"100%", width:"100%", position:'absolute'}}></Image>
      </View>
      <View style={{alignItems:'center', position:'relative', bottom:"8%"}}> 
        <View style={{height: 100, width: 100, borderRadius: 50, backgroundColor:items.avatar}}></View>      
        <Text style={{fontWeight:'bold', fontSize:16, padding:10}}>{items.userName}</Text>
      </View>
      {isFriend ? (
        <View style={{alignItems:'center', padding:30, marginTop:-60}}>
          <Text style={{textAlign:'center', lineHeight:24}}>{items.userName} chưa có hoạt động nào trò. Hãy trò chuyện để hiểu nhau hơn</Text>
        </View>
      ) : ( 
        <View style={{height:"100%"}}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:-50}}>
            <Pressable style={{padding:10, backgroundColor:"#FFFFFF", borderRadius:30}}>
              <Text style={{fontSize:14, fontWeight:'500', color:'#0091FF'}}>Kết bạn để trò chuyện thêm</Text>
            </Pressable>
            {isCheck?(
              <Pressable onPress={() => {
                handleSendRequestAddFriend()
                setIsCheck(false)
              }} style={{width:40, height:40, borderRadius:50, backgroundColor:"#0091FF", justifyContent:'center', alignItems:"center", marginLeft:10}}>
                <FontAwesomeIcon color='#F1FFFF' size={22} icon={faUserPlus} />
              </Pressable>
            ):(
              <Pressable onPress={() => {
                setIsCheck(true)
              }} style={{width:40, height:40, borderRadius:50, backgroundColor:"green", justifyContent:'center', alignItems:"center", marginLeft:10}}>
                <FontAwesomeIcon color='#F1FFFF' size={22} icon={faCircleCheck} />
              </Pressable>
            )}
          </View>
          <View style={{alignItems:'center', padding:30, marginTop:-10}}>
            <Text style={{textAlign:'center', lineHeight:24}}>Bạn chưa thể xem nhật ký của {items.userName} khi chưa là bạn bè</Text>
          </View>
        </View>
      )}
      <Toast style={{backgroundColor: 'green'}} ref={toastRef} position='center' />
    </SafeAreaView>
  )
}
