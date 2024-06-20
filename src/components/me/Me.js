import { Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faCircleNotch, faCloud, faCrown, faGear, faMagnifyingGlass, faMusic, faQrcode, faShieldVirus, faUserGear, faUserLock, faWallet } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

export const Me = ({navigation}) => {
  const user = useSelector(state => state.user)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <Text>Discovery</Text> */}
        <FontAwesomeIcon style={{marginLeft: 15}} color='#F1FFFF' size={27} icon={faMagnifyingGlass} />
        <TextInput style={styles.txtInHeader} placeholder='Tìm kiếm'></TextInput> 
       
        <Pressable style={styles.btnSetting} onPress={()=> {navigation.navigate('Setting')}}>
          <FontAwesomeIcon color='#F1FFFF' size={22} icon={faGear} /> 
        </Pressable>
      </View>

      <ScrollView style={styles.body}>
        <Pressable style={styles.pressViewInfo} onPress={()=>{alert('Trang cá nhân')}} >
          <Image source={require('../../../assets/img/avt.jpg')} style={styles.avatar}></Image>          
          <View style={{flex: 1}}>
            {/* <Text style={styles.txtViewNameInfo}>{data.user.userName}</Text> */}
            <Text style={styles.txtViewNameInfo}>{user.user?.user?.userName}</Text> 
            <Text style={{ fontSize: 15, opacity: 0.8, marginLeft: 20}}>Xem trang cá nhân</Text>
          </View>
          
          <Pressable style={styles.btnChangeAcc} onPress={()=>{alert('Chuyển tài khoản')}}>
            <FontAwesomeIcon size={24} color='#1A66D4' icon={faUserGear}/>
          </Pressable>
        </Pressable>

        <Pressable style={[styles.pressViewQR, {marginTop: 9}]}  onPress={()=>{alert('Ví QR')}}>
          <FontAwesomeIcon style={{marginLeft: 15}} size={22} color='#1A66D4' icon={faWallet} />
          <View style={{flex: 1, marginLeft: 20}}>
            <Text style={styles.txtViewQR}>Ví QR</Text>
            <Text style={styles.txtViewQR1}>Lưu trữ và xuất trình các mã QR quan trọng</Text>
          </View>
        </Pressable>

        {/* Làm màu kẻ vạch ngang */}
        <View style={styles.line}>
          <View style={styles.line1} >
            <Text> </Text>
          </View>
          <View style={styles.line2}>
            <Text> </Text>
          </View>
        </View>
        
        <Pressable style={styles.pressViewQR}  onPress={()=>{alert('Nhạc chờ Zalo X')}}>
          <FontAwesomeIcon style={{marginLeft: 15}} size={22} color='#1A66D4' icon={faMusic} />
          <View style={{flex: 1, marginLeft: 20}}>
            <View style={styles.viewMusicTxt}>
              <Text style={styles.txtViewQR}>Nhạc chờ Zalo X </Text>
              <FontAwesomeIcon style={{borderWidth: 5, borderColor: 'red'}} icon={faCrown} size={20} color='#E5850A' />    
            </View>
            <Text style={styles.txtViewQR1}>Đăng kí nhạc chờ, thể hiện cá tính</Text>
          </View>
        </Pressable>

        {/* Làm màu kẻ vạch ngang */}
        <View style={styles.line}>
          <View style={styles.line1} >
            <Text> </Text>
          </View>
          <View style={styles.line2}>
            <Text> </Text>
          </View>
        </View>
        
        <Pressable style={[styles.pressViewQR, {height: 85}]}  onPress={()=>{alert('Cloud của tôi')}}>
          <FontAwesomeIcon style={{marginLeft: 15}} size={22} color='#1A66D4' icon={faCloud} />
          <View style={{flex: 1, marginLeft: 20}}>
            <Text style={styles.txtViewQR}>Cloud của tôi </Text>
            <Text style={styles.txtViewQR1}>233 MB / 1 GB</Text>
            <View style={styles.percentCloud} >
              <View style={[styles.percentCloud1, {width: '30%'}]}>
                <Text> </Text>
              </View>

              <View style={[styles.percentCloud2, {width: '70%'}]}>
                <Text> </Text>
              </View>
            </View>
          </View>
          <FontAwesomeIcon size={15} color='#6E6E6E' style={{marginRight: 15}} icon={faChevronRight}/>
        </Pressable>

        
        {/* Làm màu kẻ vạch ngang */}
        <View style={styles.line}>
          <View style={styles.line1} >
            <Text> </Text>
          </View>
          <View style={styles.line2}>
            <Text> </Text>
          </View>
        </View>
        
        <Pressable style={[styles.pressViewQR]}  onPress={()=>{alert('Dung lượng và dữ liệu')}}>
          <FontAwesomeIcon style={{marginLeft: 15}} size={22} color='#1A66D4' icon={faCircleNotch} />
          <View style={{flex: 1, marginLeft: 20}}>
            <Text style={styles.txtViewQR}>Dung lượng và dữ liệu</Text>
            <Text style={styles.txtViewQR1}>Quản lý dữ liệu Zalo X của bạn</Text>
          </View>
          <FontAwesomeIcon size={15} color='#6E6E6E' style={{marginRight: 15}} icon={faChevronRight}/>
        </Pressable>
        
        <Pressable style={[styles.pressViewQR, {marginTop: 9, height: 55}]}  onPress={()=>navigation.navigate('AccountAndSecurity')}>
          <FontAwesomeIcon style={{marginLeft: 15}} size={22} color='#1A66D4' icon={faShieldVirus} />
          <Text style={{flex: 1, marginLeft: 20, fontSize: 18}}>Tài khoản và bảo mật</Text>
          <FontAwesomeIcon size={15} color='#6E6E6E' style={{marginRight: 15}} icon={faChevronRight}/>
        </Pressable> 

        {/* Làm màu kẻ vạch ngang */}
        <View style={styles.line}>
          <View style={styles.line1} >
            <Text> </Text>
          </View>
          <View style={styles.line2}>
            <Text> </Text>
          </View>
        </View>
        
        <Pressable style={[styles.pressViewQR, {height: 55}]}  onPress={()=>navigation.navigate('Privacy')}>
          <FontAwesomeIcon style={{marginLeft: 15}} size={22} color='#1A66D4' icon={faUserLock} />
          <Text style={{flex: 1, fontSize: 18, marginLeft: 20}}>Quyền riêng tư</Text>
          <FontAwesomeIcon size={15} color='#6E6E6E' style={{marginRight: 15}} icon={faChevronRight}/>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}
