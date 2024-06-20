import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: '#009AFA',
        // backgroundColor: 'red',
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
    }, 
    
    body: {
        flex: 1,
        backgroundColor: '#F1F2F4',
    },

    pressViewInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
    },

    avatar: {
        height: 50, 
        width: 50, 
        marginLeft: 15,
        borderRadius: 25,
    },

    txtViewInfo: {
        fontSize: 15,
        opacity: 0.8,
    },

    txtViewNameInfo: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 20
    },

    btnChangeAcc: {
        height: 40,
        width: 40,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },

    pressViewQR: {
        height: 70, 
        width: '100%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    txtViewQR: {
        fontSize: 18,
        
    },

    txtViewQR1: {
        fontSize: 15,
        marginTop: 5,
    },

    viewMusicTxt: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    percentCloud: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10
    },

    percentCloud1: {
        height: 5,
        backgroundColor: '#1A66D4',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    percentCloud2: {
        height: 5,
        backgroundColor: '#F1F2F4',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },

    btnSetting: {
        height: 40,
        width: 40,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50
    },

    line1: {
        height: 2,
        backgroundColor: '#FFFFFF',
        width: '15%'
        
    },

    line2: {
        height: 2,
        backgroundColor: '#F1F2F4',
        width: '85%'
    },

    line: {
        flexDirection: 'row'
    },


    
})