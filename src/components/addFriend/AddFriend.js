import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from  'react-native-safe-area-context'
import { styles } from './style'
import { Text, View, TextInput, Pressable, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faPersonCirclePlus, faPhone, faQrcode, faUserGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from '../../config/axios';
import Toast from 'react-native-easy-toast';

export const AddFriend = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isData, setIsData] = useState(false)
  const toastRef = useRef(null);

  useEffect(() => {
    if(phoneNumber.length > 9) {
      setIsData(false)
    } else {
      setIsData(true)
    }
  }, [phoneNumber])

  // const handleAddfriend = async ()=>{
  //   console.log("phone ",phoneNumber);
  //   const res = await axios.get(`/users/detail?phoneNumber=${phoneNumber}`)
  //   if(res.errCode === 0){
  //     try {
  //       const res2 = await sendRequestAddFriend(res.data.id)
  //       if(res2.errCode === 0){
  //         toastRef.current.show('Đã gởi yêu cầu kết bạn đến người này!', 2000);
  //         setTimeout(() => {
  //           navigation.goBack()
  //         }, 1500)
  //       }
  //     } catch (error) {
  //     }
  //   } else if(res.errCode === 1){
  //     toastRef.current.show('Không tìm thấy người dùng này!', 2000);
  //   }
  // }
  const handleFindUserByPhone = async ()=>{
    console.log("phone ",phoneNumber);
    const res = await axios.get(`/users/detail?phoneNumber=${phoneNumber}`)
    console.log("res ",res);
    if(res.errCode === 0){
      // try {
      //   const res2 = await sendRequestAddFriend(res.data.id)
      //   if(res2.errCode === 0){
      //     toastRef.current.show('Đã gởi yêu cầu kết bạn đến người này!', 2000);
      //     setTimeout(() => {
      //       navigation.goBack()
      //     }, 1500)
      //   }
      // } catch (error) {
      // }
      // navigation.navigate('Profile', {userId: res.data.id})
      navigation.navigate('Profile', {items: res.data})
    } else if(res.errCode === 1){
      toastRef.current.show('Không tìm thấy người dùng này!', 2000);
    }
  }

  const sendRequestAddFriend = async (userId) => {
    const res = await axios.post(`/users/friendShip`,{userId: userId,
    content:"Xin chào, tôi muốn kết bạn với bạn"
    })
    return res;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={()=>{
        navigation.goBack()
      }}>
        <FontAwesomeIcon style={{ marginLeft: 15 }} color='#F1FFFF' size={27} icon={faArrowLeft} />
        <Text style={styles.txtInHeader}>Thêm bạn</Text>
      </Pressable>
      <View style={styles.imgWrapper}>
        <Image source={require("../../../assets/img/maQRFake.png")} style={{height:200, width:200}}></Image>
      </View>
      <View style={styles.addFriendWrapper}>
        <TextInput placeholder="Nhập số điện thoại để tìm" value={phoneNumber} onChangeText={setPhoneNumber}>
        </TextInput>
        {/* <Pressable disabled={isData} style={[styles.btnRe, isData ? styles.gray : styles.blue, {marginLeft:15}] } onPress={handleAddfriend}>
            <FontAwesomeIcon size={18} icon={faArrowRight} />
        </Pressable> */}
        <Pressable disabled={isData} style={[styles.btnRe, isData ? styles.gray : styles.blue, {marginLeft:15}] } onPress={handleFindUserByPhone}>
          {/* <FontAwesomeIcon size={18} icon={faArrowRight} /> */}
          <Text style={styles.txt} >Thêm bạn</Text>
        </Pressable>
      </View>
      <Pressable style={styles.encodeEndWrapper}>
        <FontAwesomeIcon style={{marginLeft: 15}} color='#0091FF' size={22} icon={faQrcode} />
        <Text style={[styles.txt, {marginLeft: 15}]}>Quét mã QR</Text>
      </Pressable>
      <Pressable style={styles.encodeEndWrapper}>
        <FontAwesomeIcon style={{marginLeft: 15}} color='#0091FF' size={22} icon={faPhone} />
        <Text style={[styles.txt, {marginLeft: 15}]}>Danh bạ máy</Text>
      </Pressable>
      <Pressable style={styles.encodeEndWrapper}>
        <FontAwesomeIcon style={{marginLeft: 15}} color='#0091FF' size={22} icon={faUserGroup} />
        <Text style={[styles.txt, {marginLeft: 15}]}>Bạn bè có thể quen</Text>
      </Pressable>
      <Toast style={{backgroundColor: 'green'}} ref={toastRef} position='center' />
    </SafeAreaView>
  )
}
