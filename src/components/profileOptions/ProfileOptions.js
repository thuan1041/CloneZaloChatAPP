import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from  'react-native-safe-area-context'
import { styles } from './style'
import { Text, View, Pressable, Switch, Modal, Button } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faChevronLeft, faClock, faEllipsis, faGear, faLock, faMagnifyingGlass, faMessage, faPencil, faPhone, faRing, faStar, faTrash, faUser, faUserLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from '../../config/axios';
import Toast from 'react-native-easy-toast';

export const ProfileOptions = ({navigation, route}) => {
  const {items } = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toastRef = useRef(null);
  console.log(items);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const handleUnfriend = async (userId) => {
    console.log(userId,"hihi");
    setModalVisible(false);
    console.log(userId,"hihiê");

    const payload = {
        userId: userId
    }
    try {
        const response = await axios.put(`users/friendShip/unfriend`, payload)
        console.log(response);
        if(response.errCode === 0){
            toastRef.current.show('Xóa bạn bè thành công!', 2000);
            setTimeout(() => {
                navigation.navigate('Messages')
            }, 2000)
        }
    } catch (error) {
    }
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={{justifyContent: 'center'}} onPress={()=>{
          navigation.navigate('Profile', {items:items})
        }}>
          <FontAwesomeIcon style={{ marginLeft: 15 }} color='#F1FFFF' size={22} icon={faChevronLeft} />
        </Pressable>
        <Text style={{fontSize:18, fontWeight:'500', color:'white', marginLeft:15}}>{items.userName}</Text>
      </View>

      <View style={styles.body}>
        <Pressable style={[styles.encodeEndWrapper]}>
          <FontAwesomeIcon style={{marginLeft: 15}} color='#0091FF' size={22} icon={faUser} />
          <Text style={styles.txt}>Thông tin</Text>
        </Pressable>
        <Pressable style={styles.encodeEndWrapper}>
          <FontAwesomeIcon style={{marginLeft: 15}} color='#0091FF' size={22} icon={faPencil} />
          <Text style={styles.txt}>Đổi tên gợi nhớ</Text>
        </Pressable>
        <Pressable style={styles.encodeEndWrapper}>
          <FontAwesomeIcon style={{marginLeft: 15}} color='#0091FF' size={22} icon={faStar} />
          <Text style={styles.txt}>Đánh dấu bạn thân</Text>
          <View style={{ flex: 1,alignItems: 'flex-end', marginRight: 15 }}>
          <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
          />
          </View>
        </Pressable>
        <Pressable style={styles.encodeEndWrapper}>
          <FontAwesomeIcon style={{marginLeft: 15}} color='#0091FF' size={22} icon={faLock} />
          <Text style={[styles.txt]}>Chặn xem nhật ký của tôi</Text>
          <View style={{ flex: 1,alignItems: 'flex-end', marginRight: 15 }}>
          <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
          />
          </View>
        </Pressable>
        <Pressable style={styles.encodeEndWrapper}>
          <FontAwesomeIcon style={{marginLeft: 15}} color='#0091FF' size={22} icon={faUserLock} />
          <Text style={[styles.txt]}>Ẩn nhật ký người này</Text>
          <View style={{ flex: 1,alignItems: 'flex-end', marginRight: 15 }}>
          <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
          />
          </View>
        </Pressable>
        <Pressable style={[styles.encodeEndWrapper]}>
          <FontAwesomeIcon style={{marginLeft: 15}} color='#0091FF' size={22} icon={faRing} />
          <Text style={styles.txt}>Báo xấu</Text>
        </Pressable>
        <Pressable
          style={[styles.encodeEndWrapper]}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesomeIcon style={{ marginLeft: 15 }} color='red' size={22} icon={faTrash} />
          <Text style={[styles.txt, { color: 'red', fontWeight: '400' }]}>Xóa khỏi danh sách bạn bè</Text>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bạn có chắc muốn xóa {items.userName} khỏi danh sách bạn bè?</Text>
            <View style={styles.modalButtons}>
              <Button
                title="Hủy bỏ"
                onPress={() => setModalVisible(false)}
              />
              <Button
                title="Xác nhận"
                onPress={() => handleUnfriend(items.userId)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Toast style={{backgroundColor: 'green'}} ref={toastRef} position='center' />
    </SafeAreaView>
  )
}
