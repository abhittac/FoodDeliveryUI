//import liraries
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather"
import { themeColors } from '../theme';
import { urlFor } from '../sanity';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
// create a component
const RestaurantScreen = () => {
    const {params} =useRoute()
    const navigation=useNavigation()
    let item=params
    return (
        <SafeAreaView >
            <CartIcon/>
           <ScrollView>
            <View >
                <Image className="w-full h-72" source={{uri:urlFor(params.image.asset._ref).url()}}/>
                <TouchableOpacity
                onPress={()=>{
                    navigation.goBack()
                }}
                className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
                >

        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
                </TouchableOpacity>
            </View>
            <View
            style={{
                borderTopLeftRadius:40,
                borderTopRightRadius:40
            }}
            className="bg-white -mt-12 pt-6">
<View className="px-5 ">
    <Text className="text-3xl font-bold">
        {item.name}
    </Text>
    <View className='flex-row space-x-2 my-1'>
        <View className="flex-row items-center space-x-1">
        <Text className="text-xs">
                        
                        <Text className="text-green-700">⭐{item.rating}</Text>
                        <Text className="text-gray-700">( {item.reviews} review) .
                        <Text className="font-semibold">

                           {item.type.name}
                        </Text>
                      
                        </Text>     
                    </Text>

        </View>
        <View className="flex-row item-center">
                            <Icon.MapPin color={'gray'} width={15} height={15} />
                            <Text className="text-gray-700 text-xs">
                                Near By. {item.address}
                            </Text>
                        </View>
    </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
</View>
            </View>
            {/* dishes  */}
            <View className="pb-36 bg-white">
                <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                <ScrollView >
                        {
                            item.dishes.map((dish, index) => {
                                return (
                                    <DishRow item={{ ...dish }} key={index} />
                                );
                            })
                        }
                    </ScrollView>
            </View>
           </ScrollView>
        </SafeAreaView>
    );
};



//make this component available to the app
export default RestaurantScreen;
