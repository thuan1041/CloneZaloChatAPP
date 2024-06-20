import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { text } from '@fortawesome/fontawesome-svg-core'
import Toast, { DURATION } from 'react-native-easy-toast';
import axios from 'axios'

export const ChangePassword = ({navigation}) => {
  const toastRef = useRef(null);
  const [isShow, setIsShow] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [newData, setNewData] = useState({
    id: null,
    nowPassword: null,
    newPassword: null ,
  });

  const [newPassword, setNewPassword] = useState('');
  const [nowPassword, setNowPassword] = useState('');
  const [newPasswordAgain, setNewPasswordAgain] = useState('');

  useEffect(() => {
    fetchData(); 
  }, []);

  useEffect(() => {
    setNewData({...newData, newPassword: newPassword, nowPassword: nowPassword});
  }, [newPassword, nowPassword]);

  const fetchData = async () => {
    try {
      const dataGetStorage = await AsyncStorage.getItem('dataUser');
      const dataUser = JSON.parse(dataGetStorage);
      console.log("dataUser: ", dataUser.user);
      if (dataGetStorage !== null) { 
        setNewData({...newData, id: dataUser.user.id});
        console.log('MainScreen: userData is exist:', true);
        setIsLoading(false);
      } else {
        console.log('MainScreen:  userData dont exist:', false);
      }
      
    } catch (error) {  
      console.error('Error fetching data from AsyncStorage:', error);
    }
  };

  const changePassword = async(newPassword) => {
    try {
      const response = await axios.post(`http://172.20.10.3:8080/auth/change-password`, { 
        id: newPassword.id,
        oldPassword: newPassword.oldPassword,
        newPassword: newPassword.newPassword
       });
    return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  
  const handleSave = async () => {
    try {
      if (checkNewPassword()) {
        console.log('data', newData);
        const response = await changePassword(newData);
        console.log("response: ", response);
        if (response.errCode === 0) {
          toastRef.current.show('Đổi mật khẩu thành công', 2000);
          navigation.goBack();
        } else {
          toastRef.current.show('Đổi mật khẩu thất bại', 2000);
      }}
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const checkNewPassword = () => {
    if (newPassword !== newPasswordAgain) {
      toastRef.current.show('Mật khẩu mới không trùng khớp', 2000);
      return false;
    } else {
      return true;
    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressBack} onPress={()=> {navigation.goBack()}}>
          <FontAwesomeIcon icon={faChevronLeft} style={{marginLeft: 10}} color='#F5F8FF' size={20} />
          <Text style={styles.txtInHeader}>Đổi mật khẩu</Text> 
        </Pressable>
      </View>

      <View style={styles.body}>   
        <View style={{height: 40, backgroundColor: '#F1F2F4', justifyContent: 'center'}}>
          <Text style={{fontSize: 15, marginLeft: 20}}>Mật khẩu phải gồm chữ, số hoặc kí tự đặc biệt</Text>
        </View>

        <View style={{width:'95%', alignSelf: 'center', marginTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, color: '#07439B'}}>Mật khẩu hiện tại</Text>
            <Pressable onPress={()=>setIsShow(!isShow)}>
              <Text style={{fontSize: 16}}>{isShow ? 'Hiện' : 'Ẩn'}</Text>
            </Pressable>
          </View>
          <TextInput onChangeText={(text)=> setNowPassword(text)} secureTextEntry={isShow} style={{height: 40, fontSize: 18, borderBottomWidth: 1}} placeholder='Nhập mật khẩu hiện tại'></TextInput>
        </View>
        
        <View style={{width:'95%', alignSelf: 'center', marginTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, color: '#07439B'}}>Mật khẩu mới</Text>
          </View>
          <TextInput onChangeText={(text)=> {setNewPassword(text)}} secureTextEntry={isShow} style={{height: 40, fontSize: 18, borderBottomWidth: 1}} placeholder='Nhập mật khẩu mới'></TextInput>
          <TextInput onChangeText={(text)=> setNewPasswordAgain(text)} secureTextEntry={isShow} style={{height: 40, fontSize: 18, borderBottomWidth: 1, marginTop: 10}} placeholder='Nhập lại mật khẩu mới'></TextInput>
        </View>


        <Pressable onPress={()=>handleSave()} style={{alignItems: 'center', marginTop: 50}}>
          <Text>Cập nhật</Text>
        </Pressable>

        <Toast ref={toastRef} position='top' />
      </View>
    </SafeAreaView>
  )
}

