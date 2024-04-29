import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import { getFeaturedRestaurantsById } from '../Api'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
export default function CartScreen() {
    const {params} =useRoute()
    const navigation=useNavigation()
    let item=params

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
            <Text className="text-center text-gray-500">{       item.name}</Text>
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
                     item.dishes.map((i,index)=>(
                    <View key={index}
                    
                    className="flex-row items-center space-x-3 py-2 px-2 bg-gray-200 rounded-3xl mx-2 mb-3 shadow-md" 
                    >
                        <Text className="font-bold" style={{color:themeColors.text}}>2x</Text>
                        <Image className="h-14 w-14 rounded-full" source={{uri:urlFor(i.image.asset._ref).url()}}/>
                        <Text className="flex-1 font-bold text-gray-700">
                            {i.name}
                        </Text>
                        <Text className="font-semibold text-base">
                            ${i.price}
                        </Text>
                        <TouchableOpacity
        className="p-1 rounded-full"
        style={{backgroundColor:themeColors.bgColor(1)}}
        >

            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
        </TouchableOpacity>
                    </View>
                ))
            }
            
        </ScrollView>

<View style={{backgroundColor:themeColors.bgColor(.4)}} className="p-6 px-8 rounded-t-3xl space-y-4">
            <View className="flex-row justify-between">
                <Text className="text-gray-700">
                    Subtotal

                </Text>
                <Text className="text-gray-700">
                    $20

                </Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-700">
                    Delivery Fee

                </Text>
                <Text className="text-gray-700">
                    $20

                </Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-700 font-extrabold">
                    Order Total

                </Text>
                <Text className="text-gray-700 font-extrabold">
                    $20

                </Text>
            </View>
            <TouchableOpacity
            style={{backgroundColor:themeColors.bgColor(1)}}
            className="p-3 rounded-full"
            onPress={()=>{
                navigation.navigate('OrderPrepare')
            }}
            >
                <Text className="text-white text-center font-bold text-lg">
                    Place Order
                </Text>

            </TouchableOpacity>
</View>

    </View>

  </View>
  )
}
