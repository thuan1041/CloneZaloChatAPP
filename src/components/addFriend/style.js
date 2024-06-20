import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      // alignItems: 'center',
  },
    phoneInput: {
      width: "80%",
      height: "auto",
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
    },
    addFriendWrapper:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      marginTop:20,
      padding:20
    },
    btnRe: {
      height: 30,
      width: 90,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    blue: {
        backgroundColor: '#127FFF'
    },
    gray: {
        backgroundColor: '#9FE1FF'
    },
    header: {
      flexDirection: 'row',
      width: '100%',
      height: 55,
      alignItems: 'center',
      backgroundColor: '#009AFA',
    },
    txtInHeader: {
        fontSize: 18,
        color: '#F1FFFF',
        width: '60%',
        height: 30,
        marginLeft: 15,
        fontWeight:'600'
    },
    encodeEndWrapper:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 40,
      paddingLeft: 15,
    },
    txt:{
      fontSize: 16,
      fontWeight:'500',
    },
    imgWrapper:{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 30,
    }
})