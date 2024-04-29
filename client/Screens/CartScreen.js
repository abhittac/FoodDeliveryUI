import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import { getFeaturedRestaurantsById } from '../Api'
export default function CartScreen() {
    const [restaurant, setRestaurant] = useState([]);
    useEffect(() => {
      getFeaturedRestaurantsById('298dd014-510e-4bc2-976e-3ad2d7df9bbd').then(data => {
        setRestaurant(data[0].restaurants[0].dishes);
        console.log('dataDISH', data[0].restaurants[0].dishes);
      }).catch(error => {
        console.error('Error fetching featured restaurants:', error);
      });
    }, []);
  return (
  <View className="bg-white flex-1 mt-5">
    <View className="relative py-4 shadow-sm">
        <TouchableOpacity
        onPress={()=>{

        }}  
        style={{backgroundColor:themeColors.bgColor(1)}}
        className="absolute z-10 rounded-full p-1 shadow top-5 left-5"
        >

        <Icon.ArrowLeft strokeWidth={3} stroke="white"/>
        </TouchableOpacity>
        <View className="mb-4">
            <Text className="text-center font-bold text-xl">Your Cart</Text>
            <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>

        <View style={{backgroundColor:themeColors.bgColor(.4)}}
        className="flex-row px-4 items-center"
        >
            <Image
            className="w-20 h-20 rounded-full"
            source={require('../assets/images/delivery.png')}
            />
            <Text className="flex-1 pl-4">
                Deliver in 20 - 30 minutes

            </Text>
            <TouchableOpacity>
                <Text className="font-bold"
                style={{color:themeColors.text }}
                >
                    Change
                </Text>
            </TouchableOpacity>

        </View>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:50
        }}
        className="bg-white pt-5"
        >
            {
                restaurant.dishes.map((i,index)=>(
                    <View key={index}
                    className="flex-row items-center space-x-3 py-2 px-2 bg-white rounded-3xl mx-2 mb-3 shadow-md" 
                    >
                        <Text>{i.name}</Text>
                    </View>
                ))
            }
            
        </ScrollView>

    </View>

  </View>
  )
}
