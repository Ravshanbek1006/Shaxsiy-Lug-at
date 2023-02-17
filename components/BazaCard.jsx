import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

export default function BazaCard() {
  const navigation = useNavigation()

  return (
    <Button
        title="Open Drawerrrrrrrrrrr"
        onPress={() => navigation.toggleDrawer()}
      />
  )
}

const styles = StyleSheet.create({})
