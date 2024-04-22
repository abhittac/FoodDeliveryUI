//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { getCategories } from '../Api';
import { urlFor } from '../sanity';

// create a component
const Categories = () => {
    const [categories,setcategories]=useState([])
    const [activeCategory,setactiveCategory]=useState(null)
    useEffect(()=>{
        getCategories().then((data)=>{
            setcategories(data)
        })
    },[])
    console.log('check',activeCategory)
    return (
        <View className="mt-4">
            <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{
                paddingHorizontal:15
            }}
            >{
                categories.map((i,index)=>{
                    let isActive=i._id==activeCategory
                    let btnclass=isActive?'bg-gray-600':'bg-gray-200'
                    let textclass=isActive?'font-semibold text-gray-800':'text-gray-500'
         
                    return(
                        <View key={index} className="flex justify-center items-center mr-6">
                            <TouchableOpacity
                            onPress={()=>{
                                setactiveCategory(i._id)
                            }}
                            className={`p-1 rounded-full shadow bg-gray-200 ${btnclass}`}
                            >
                                <Image style={{width:45,height:45}} source={{uri:urlFor(i.image.asset._ref).url()}}/>

                            </TouchableOpacity>
                            <Text className={`text-sm ${textclass}`}>{i.name}</Text>

                        </View>
                    )
                })
            }

            </ScrollView>
          
        </View>
    );
};



//make this component available to the app
export default Categories;
