import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
    footerWrapper:{
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
})