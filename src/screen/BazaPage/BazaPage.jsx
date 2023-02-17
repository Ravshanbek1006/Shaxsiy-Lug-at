import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerActions } from '@react-navigation/native'
import BazaCard from '../../../components/BazaCard'


export default function BazaPage({ navigation }) {
  return (
    <View>
      <BazaCard />
      <View style={styles.Rdffsds}>
        <Text>salom</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Rdffsds: {
    margin: 20,
   elevation:10
  }
})