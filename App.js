import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "./src/components/Title/";
import Form from "./src/components/Form"
import Footer from "./src/components/Footer"

export default function App() {
    return (
        <View style={styles.container}>
            <Title/>
            <Form/>
            <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e5e5',
        paddingTop: 80,
    },
  });