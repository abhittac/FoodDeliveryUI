//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { themeColors } from '../theme';
import RestaurantCard from './RestaurantCard';

// create a component
const FeaturedRow = ({title,restaurants,description}) => {
    return (
        <View>
        <View className="flex-row justify-between items-center px-4">
           <View >

                <Text className="font-bold text-lg">{title}</Text>
                <Text className="text-gray-500 text-xs">{description}</Text>
        
           </View>
           <TouchableOpacity>
            <Text style={{color:themeColors.text}} className="font-semibold">See All</Text>
           </TouchableOpacity>
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15
        }}
        className="overflow-visible py-5"
        >
            {
                restaurants.map((i,index)=>{
                    return(
                        <RestaurantCard
                        item={i}
                        key={index}
                        />
                    )
                })
            }

        </ScrollView>
        </View>
    );
};



//make this component available to the app
export default FeaturedRow;
