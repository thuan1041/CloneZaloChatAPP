import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#009AFA',
    },

    header: {
        flexDirection: 'row',
        width: "100%",
        height: 70,
        alignItems: "center",
        backgroundColor: '#009AFA',
        justifyContent: 'flex-start',
    },
    txtInHeader: {
        color: '#F1FFFF',
        marginLeft: 15,
        color: "white",
        fontSize: 18,
        fontWeight: '500'
    },
    
    body: {
        flex: 1,
    },

    pressZaloVideo: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        width: '100%',
        justifyContent: 'space-between',
    },
    avtWrapper:{
        flexDirection: 'column',
        alignItems: 'center',
        height: 70,
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginTop: 15,
        marginBottom: 15,
        padding:10
    },
    img_avt:{
        height: 80,
        width: 80,
        borderRadius: 50,
        alignItems:'center',
        // borderBlockColor:'#0091FF',
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
    imageContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
    },
    img:{
        height: 70,
        width: 70,
        padding:10
    }
})