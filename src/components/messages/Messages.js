import { Text, View, FlatList, Image, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faQrcode,faPlus } from '@fortawesome/free-solid-svg-icons';
import axios, { setAuthorizationAxios } from '../../config/axios'
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setListFriend } from '../../redux/friendSlice';
import { socket } from '../../config/io';

export const Messages = ({ navigation }) => {
  const user = useSelector(state => state.user);
  const [chatData, setChatData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [access_token, setAccess_Token] = useState('');
  const [chatInfo, setChatInfo] = useState([]);
  const dispatch = useDispatch();
  var isCreate = useSelector(state => state.isCreateGroup.isCreateGroup);
  // console.log('isCreateGroup:', isCreate);

  // thuan
  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await axios.get('/chat/pagination?page=1&limit=100'); 
        if ( response.errCode===0 ) { 
          setChatData(response.data); 
          setIsLoading(false);  
        } else if (response.message.includes('Refresh token success')) {
        }
      } catch (error) {  
        console.log('Error fetching chat:', error); 
        resetToScreen(navigation, 'Login');
      }   
    }; 
    fetchChat()
  }, [isCreate]);
  // end thuan
  
  useEffect(()=>{
    setAccess_Token(user.user?.access_token);
    setAuthorizationAxios(user.user?.access_token);
  },[user])

  // Load chat 
  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await axios.get('/chat/pagination?page=1&limit=100'); 
        // console.log('response', JSON.stringify(response));
        // console.log('response', JSON.stringify(response));
        if ( response.errCode===0 ) { 
          setChatData(response.data); 
          setIsLoading(false);  
          // console.log('Chat data:', JSON.stringify(response.data)); 
          // console.log(1);
          // console.log('Chat data:',  JSON.stringify(response));
        } else if (response.message.includes('Refresh token success')) {
        }
      } catch (error) {  
        console.log('Error fetching chat:', error); 
        resetToScreen(navigation, 'Login');
      }   
    }; 

    fetchChat();
  }, [access_token]);   

  useEffect(() => {
    const dataChat = chatData.map((item) => {
        if (item.type.includes('PRIVATE_CHAT')) {
          if (item.participants[1].id === user.user?.user?.id) {
            return {
              _id: item._id,
              userName: item.participants[0].userName,
              phoneNumber: item.participants[0].phoneNumber,
              avatar: item.participants[0].avatar,
              updatedAt: item.updatedAt,
              userId: item.participants[0].id,
              type: "PRIVATE_CHAT"
            };
          } else { 
            return {
              _id: item._id,
              userName: item.participants[1].userName,
              phoneNumber: item.participants[1].phoneNumber, 
              avatar: item.participants[1].avatar,
              updatedAt: item.updatedAt ,
              userId: item.participants[1].id,
              type: "PRIVATE_CHAT"
            }; 
          }    
        } else if (item.type.includes('GROUP_CHAT')) {
            return { 
              _id: item._id,
              userName: item.name,
              avatar: item.groupPhoto,
              updatedAt: item.updatedAt,
              userId: item.participants[1].id, 
              type: "GROUP_CHAT"
            };
        }
        return null; 
    });
    setChatInfo(dataChat);
  }, [chatData]);

   // Trong một component hoặc bất kỳ nơi nào muốn thực hiện việc xóa các màn hình trước đó
  const resetToScreen = (navigation, routeName) => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }], 
    }));
  };

  useEffect(() => {
    fetchFriendList();
  },[])


  if (isLoading) { 
    return(
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Text>Đang tải dữ liệu...</Text>
      </View>
    ); 
    // return false;
  }

  const renderItem = ({ item }) => {
    // console.log('chatInfo:', chatInfo);
    return (
    <Pressable style={styles.btnSelectChat} onPress={()=>{
      navigation.navigate('ChatMessage', {items: item});
    }}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%'}}>
        <View style={{height: 45, width: 45, borderRadius: 30, backgroundColor: item.avatar, justifyContent:'center', alignItems:'center'}}>
          <Text style={{ fontSize: 18, color: handleAvatar(item).color == 'white' ? '#FFF' : 'black', fontWeight: 'bold' }}>
            {handleAvatar(item).initials}
          </Text>
        </View>

        <View style={{flex: 1, marginLeft: 15}}>
          <Text style={{fontSize: 20, marginBottom: 3}}>{item.userName}</Text>
          <Text style={{marginTop: 3}}>{item.phoneNumber}</Text>
        </View>
        {/* <Text>{item.updatedAt}</Text>  */}
        <Text>2 giờ</Text>  
      </View>
    </Pressable>
  )};


  //thuan
  async function fetchFriendList() {
    try {
      const res = await axios.get(`/users/friends?page=${1}&limit=${10}`);
      if(res.errCode === 0){
        const newItem = []
        for(let i = 0; i < res.data.length; i++){
          if(res.data[i].user1Id == user.user.user.id){
            newItem.push(res.data[i].user2)
          } else {
            newItem.push(res.data[i].user1)
          }
        }
      dispatch(setListFriend(newItem));
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  const handleAvatar = (item) => {
    const fullName = item.userName
    const words = fullName.split(' ');
    const lastWord = words[words.length - 1];
    const secondLastWord = words.length > 1 ? words[words.length - 2] : '';
    const [r,g,b] = item.avatar.match(/\d+/g)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return {
      initials : (secondLastWord.charAt(0) || '') + (lastWord.charAt(0) || ''),
      color: brightness > 125 ? 'black' : 'white'
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBtnWrapper}>
          <FontAwesomeIcon size={27} style={styles.icon} icon={faSearch} />
          <TextInput style={styles.searchTxt} placeholder="Tìm kiếm" />
        </View>

        <View style={styles.actionIconsWrapper}>
          <Pressable onPress={()=>{
            navigation.navigate('QRCodeScanner');
          }}>
            <FontAwesomeIcon size={25} style={styles.icon} icon={faQrcode} />
          </Pressable> 

          <Pressable onPress={()=>{
            // navigation.navigate('QRReader');
          }}>
            <FontAwesomeIcon size={25} style={[styles.icon, { marginLeft: 10 }]} icon={faPlus} />
          </Pressable>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          data={chatInfo}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </SafeAreaView>
  );
};