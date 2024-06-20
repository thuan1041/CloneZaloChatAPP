import { Pressable, Text, TextInput, View} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faChevronLeft, faCircle} from '@fortawesome/free-solid-svg-icons'
import Toast from 'react-native-easy-toast';

export const RegisterPageL = ({navigation}) => {
  const [name, setName] = useState('')
  const [isData, setIsData] = useState(true)
  const toastRef = useRef(null);

  useEffect(() => {
    if(name.length > 1 && name.length < 41) {
      setIsData(false)
    } else {
      setIsData(true)
    }
  }, [name])

  const successHandle = ()=>{
    const check= checkName(name);
    if (check) {
      navigation.navigate('RegisterPage2', {name: name})
    } else {
      toastRef.current.show('Tên không hợp lệ', 2000)
    }
  }

  const checkName = (name) => {
    // const regex = /^[^0-9]{2,}\s*$/;
    const regex = /^[^0-9]{2,}$/;
    if (regex.test(name)) {
      return true;
    } else {
      return false;
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressBack} onPress={()=> {navigation.goBack()}}>
          <FontAwesomeIcon icon={faChevronLeft} style={{marginLeft: 10}} color='#F5F8FF' size={20} />
          <Text style={styles.txtInHeader}>Tạo tài khoản</Text> 
          {/* <Text>{todo}</Text> */}
        </Pressable>
      </View>

      <View style={styles.body}>
        <View style={{alignItems: 'center', width: '95%'}}>
          <Text style={{alignSelf: 'flex-start', fontSize: 18, fontWeight: '500', marginTop: 15}}>Tên Zalo</Text>
          <TextInput style={styles.textNameI} placeholder='Gồm 2-40 ký tự' onChangeText={(name)=>setName(name)}></TextInput>
        </View>

        <View style={{width: '95%'}}>
          <Text style={[styles.texxt, {marginTop: 20}]}>Lưu ý khi đặt tên:</Text>
          <View style={{marginTop: 8}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesomeIcon size={10} icon={faCircle} />
              <Text style={styles.texxt}>  Không vi phạm Quy định đặt tên trên Zalo.</Text>
            </View>
            <View style={{flexDirection: 'row',  alignItems: 'center', marginTop: 8}}>
              <FontAwesomeIcon size={10} icon={faCircle} />
              <Text style={styles.texxt}>  Nên sử dụng tên thật giúp bạn bè dễ nhận ra bạn.</Text>
            </View>
          </View>
        </View>

        <Pressable disabled={isData} style={[styles.btnRe, isData ? styles.gray : styles.blue] } onPress={()=>{successHandle()}}>
            <FontAwesomeIcon size={23} icon={faArrowRight} />
        </Pressable>
      </View>
      <Toast ref={toastRef} position='top'/>
      
    </SafeAreaView>
  )
}

