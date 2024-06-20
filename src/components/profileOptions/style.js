import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009AFA',
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        height: 55,
        alignItems: 'center',
        backgroundColor: '#009AFA',
    },

    body: {
      backgroundColor: '#F1FFFF',
      flex: 1,
    },

    txtInHeader: {
        fontSize: 18,
        color: '#F1FFFF',
        width: '60%',
        height: 30,
        marginLeft: 15,
    },
    OptionsAbove:{
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:150,
    },
    pressFindMessage:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
    },
    encodeEndWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 55,
    },
    txt:{
        fontSize: 16,
        marginLeft: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      modalText: {
        marginBottom: 20,
        textAlign: 'center',
      },
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },

});
