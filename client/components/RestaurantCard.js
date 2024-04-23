//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { urlFor } from '../sanity';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather"
import { useNavigation } from '@react-navigation/native';
// create a component
const RestaurantCard = ({item}) => {
 const navigator=useNavigation()
    return (
      <TouchableWithoutFeedback
      onPress={()=>navigator.navigate('Restaurant',{...item })}
      >
        <View
        style={{
            shadowColor: themeColors.bgColor(0.5), // Change the opacity value here as needed
            shadowRadius: 7
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg">
            <Image className="h-36 w-64 rounded-t-3xl" source={{uri:urlFor(item.image.asset._ref).url()}}/>
            <View className="px-3 pb-4 space-y-2">
                <Text className="text-lg font-bold pt-2">
{item.name}
                </Text>
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
                 <View className="flex-row item-center space-x-1">
                            <Icon.MapPin color={'gray'} width={15} height={15} />
                            <Text className="text-gray-700 text-xs">
                                Near By. {item.address}
                            </Text>
                        </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
};

// define your styles


//make this component available to the app
export default RestaurantCard;
