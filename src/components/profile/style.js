import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'relative'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 1,
        marginTop: 30,
    },
    txtInHeader: {
        fontSize: 18,
        color: '#F1FFFF',
        width: '60%',
        height: 30,
        marginLeft: 15,
    },
});
