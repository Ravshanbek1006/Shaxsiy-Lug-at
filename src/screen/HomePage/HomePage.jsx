import { ImageBackground, StyleSheet, Text, View , Image, Button} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import HederCard from '../../../components/HederCard';
import ItemCard from '../../../components/ItemCard';

export default function HomePage({navigation}) {
  return (
   <ImageBackground style = {{flex:1}} source={require("../../assets/NewBack.png")}>
      <HederCard title = "Home" />
      <ItemCard/>
   </ImageBackground> 
    
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})