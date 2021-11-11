import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import SellScreen from '../screens/SellScreen'
import MessageScreen from '../screens/MessageScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions= {
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        switch (route.name) {
                            case 'Home':
                                return <AntDesign name='home' size={size} color={color} />           
                            case 'Search':
                                return <AntDesign name='search1' size={size} color={color} />
                            case 'Sell':
                                return <AntDesign name='pluscircleo' size={size} color={color} />
                            case 'Message':
                                return <AntDesign name='mail' size={size} color={color} />
                            case 'Profile':
                                return <AntDesign name='user' size={size} color={color} />
                        }
                    },
                    tabBarActiveTintColor: '#9132a8',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false
                })
            }
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Sell" component={SellScreen} />
                <Tab.Screen name="Message" component={MessageScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}