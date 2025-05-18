import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FF0043',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 150,
        paddingHorizontal: 20,
    },
    icon: {
        marginHorizontal: 15,
    },
})

export default styles;