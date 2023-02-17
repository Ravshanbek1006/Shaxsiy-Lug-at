import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

// import { DrawerActions } from '@react-navigation/native'
export default function HederCard(props) {
    const navigation = useNavigation()
    return (
        <ImageBackground style={styles.hederCardItem} resizeMode="stretch" source={require("../src/assets/hedernav1.png")}>
            <Text style={styles.HederText}>{props.title}</Text>
            <TouchableOpacity style={styles.PressStyle} onPress={() => navigation.toggleDrawer()}>
                <Ionicons name="md-menu" size={30} style={styles.Hamburger} />

            </TouchableOpacity>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({

    hederCardItem: {
        height: 60,
        marginTop: 10,
        marginHorizontal: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    HederText: {
        fontSize: 25,
        fontWeight: "600",
        color: "#fff"
    },
    Hamburger: {
        color: "#fff",

    },
    PressStyle: {
        position: "absolute",
        left: 20
    }

})