import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props) {
    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor:"#00000000" }}>
            <ImageBackground resizeMode= 'stretch' style = {styles.bgImg} source={require("../src/assets/navdibiri.png")} >
                <DrawerContentScrollView {...props}>
                    <DrawerItemList  {...props} />
                </DrawerContentScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgImg:{
        flex:1,
        paddingStart:20,
        paddingTop:40,
    }
})