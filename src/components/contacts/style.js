import { StyleSheet } from 'react-native'

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
        justifyContent: 'space-between'
       
    },
    txtInHeader: {
        flex: 1,
        fontSize: 18,
        color: '#F1FFFF',
        width: '60%',
        height: 30,
        marginLeft: 15,
    },
})