import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import RestaurantScreen from './Screens/RestaurantScreen';

import CartScreen from './Screens/CartScreen';
import OrderPrepareScreen from './Screens/OrderPrepareScreen';

// create a component
const Navigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" component={CartScreen}  options={{presentation:'modal'}}/>
        <Stack.Screen name="OrderPrepare" component={OrderPrepareScreen}  options={{presentation:"fullScreenModal"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};



//make this component available to the app
export default Navigation;
