import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screen/HomePage/HomePage';
import BazaPage from '../screen/BazaPage/BazaPage';
import CustomDrawer from '../../components/CustomDrawer';
import { color } from 'react-native-reanimated';
import BazaCard from '../../components/BazaCard';

const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <View style={{ backgroundColor: 'blue', width: 600, height: 50 }}>
      <Text>salom</Text>
    </View>
  );
}

export default function DarwerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#00000000", width: Dimensions.get("screen").width * 0.8 },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "red",
        drawerActiveBackgroundColor: "none",
        drawerItemStyle: { width: Dimensions.get("screen").width * 0.4 },
        drawerLabelStyle: { fontSize: 20, fontFamily: "roboto" },
        drawerType: "front",
        drawerHideStatusBarOnOpen: false,
        keyboardDismissMode: "none",
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props}
      />}>
      <Drawer.Screen
        name="Home" component={HomePage}
      />
      <Drawer.Screen name="Baza" component={BazaPage} />

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  DrawerStyle: {
    // backgroundColor:"red",
    paddingTop: 50
  },

})