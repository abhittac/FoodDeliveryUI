//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { urlFor } from '../sanity';
import { themeColors } from '../theme';

// create a component
const RestaurantCard = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View
        style={{
            shadowColor:themeColors.bgColor(0.2),
            shadowRadius:7
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg">
            <Image className="h-36 w-64 rounded-t-3xl" source={{uri:urlFor(item.image.asset._ref).url()}}/>
            <View>
                <Text>

                </Text>
                <View className="flex-row items-center space-x-1">
                    <Text className="text-xs">
                        
                        <Text className="text-green-700">⭐{item.rating}</Text>
                        <Text className="text-gray-700">( {item.reviews} review) . 
                        <Text className="font-semibold">
                            Fast Food

                        </Text>
                        </Text>
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
