//import liraries
import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView } from 'react-native';
import * as Icon from "react-native-feather"
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import { getCategories, getFeaturedRestaurants } from '../Api';
import FeaturedRow from '../components/FeaturedRow';
// create a component
const HomeScreen = () => {
    const [featured,setfeatured]=useState([])
    useEffect(()=>{
        getFeaturedRestaurants().then((data)=>{
            setfeatured(data)
            console.log('checsk',data)
        })
    },[])
    return (
        <SafeAreaView className="bg-white mt-12">
            <StatusBar barStyle='dark-content' />

            {/* search bar  */}
            <View className="flex-row items-center space-x-2 px-4 pb-2 mt-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height={'25'} width={'25'} stroke={'gray'}/>
                    <TextInput placeholder='Restautrants' className="ml-2 flex-1"/>
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height={20} width={20} stroke={'gray'}/>
                        <Text className="text-gray-600">New York, NYC</Text>
                        </View>

                </View>
                <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-3  rounded-full">
                    <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke={'white'}/>
                </View>

            </View>

            {/* main  */}
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:20
        }}
        >
            {/* categroies  */}
            <Categories/>
              {/* featured  */}

              <View className="mt-5">
                {
                    featured.map((i,index)=>{
                        console.log(i)
                        return(
                            <FeaturedRow
                            key={index}
                            title={i.name}
                            restaurants={i.restaurants}
                            description={i.description}
                            />
                        )
                    })
                }

              </View>
        </ScrollView>
        </SafeAreaView>
    );
};


//make this component available to the app
export default HomeScreen;
