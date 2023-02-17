import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingPage from "../screen/StartingPage/StartingPage"
import SliderPage from "../screen/SliderPage/SliderPage"
import DarwerNavigation from './DarwerNavigation';
import HederCard from '../../components/HederCard';



export default function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="DriwerNav"
                    component={DarwerNavigation}
                    options={{ headerShown: false , 
                     }} />
                <Stack.Screen name="Slider" component={SliderPage} options={{ headerShown: false }} />
                <Stack.Screen name="Start" component={StartingPage} options={{ headerShown: false }} />
                <Stack.Screen name="card" component={HederCard} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})