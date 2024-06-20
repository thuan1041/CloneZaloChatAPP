import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: '#009AFA',
    },

    header: {
        width: '100%',
        height: 55,
        backgroundColor: '#009AFA',
        justifyContent: 'center',
        marginTop: 25
    },

    pressBack: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
        height: 40,
        // backgroundColor: 'red',
        // justifyContent: 'center'
    },

    txtInHeader: {
        fontSize: 21,
        color: '#F1FFFF',
        marginLeft: 10,
        marginBottom: 2
    }, 
    
    body: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingBottom: 200,
        alignItems: 'center'
    },

    blue: {
        backgroundColor: '#127FFF'
    },

    gray: {
        backgroundColor: '#9FE1FF'
    },

    texxt: {
        fontSize: 16
    },

    btnRe: {
        height: 40,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 90
    },

    inputt: {
        width: '35%', 
        fontSize: 25 , 
        height: 40, 
        borderBottomWidth: 2,
        borderBottomColor: '#1ED0F1', 
        color: 'black',
        marginTop: 30,
        textAlign: 'center'
    },

    btnReCode: {
        // backgroundColor: 'red',
        height: 30,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})