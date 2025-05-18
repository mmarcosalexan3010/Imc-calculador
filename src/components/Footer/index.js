import React from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

export default function Footer() {
    const handleInstagramPress = () => {
        Linking.openURL('https://www.instagram.com/ms.aler_2');
    };

    const handleWhatsappPress = () => {
        Linking.openURL('https://wa.me/+5592992243646');
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={handleInstagramPress}>
                <Icon style={styles.icon} name="instagram" size={30} color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleWhatsappPress}>
                <Icon style={styles.icon} name="whatsapp" size={30} color="#fff"/>
            </TouchableOpacity>
        </View>
    )
}