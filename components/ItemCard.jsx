import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ItemCard() {
    return (
        <View style={styles.Card}>
            <ImageBackground resizeMode='stretch' style={styles.ItemStyle} source={require("../src/assets/Card1.png")} >
                <View style={styles.CardItemStytle}>
                    <Text style={styles.ItemText} >Lesson-1 fdsafd asdfaf dafafae afeafef afaefeges</Text>
                </View>
                <View style={styles.IndexCard}>
                    <Text style={styles.IndexStyle}>
                        So'zlar soni - 20
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    ItemStyle: {
        height: 110,
        width: "100%",
        margin: 0,
        // backgroundColor:"red",
        justifyContent: "space-between",
        paddingTop: 30,
        paddingBottom: 10

    },
    CardItemStytle: {
        // backgroundColor:'blue',
        paddingHorizontal: 30,
        height: 50
    },
    ItemText: {
        fontSize: 17,
        fontWeight: "500",
        color: "#ffffff"
    },
    IndexStyle: {
        fontSize: 12,
        textAlign: "right",
        fontWeight: "400",
        color: "yellow"
    },
    IndexCard: {
        // backgroundColor:"yellow",
        paddingRight: 30
    },
    Card: {
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 70,
    }
})