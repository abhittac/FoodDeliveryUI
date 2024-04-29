import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'

export default function OrderPrepareScreen() {
    const nav=useNavigation()
    useEffect(()=>{

    },[])
  return (
   <View className="flex-1 bg-white justify-center items-center">
    <Image className="w-80 h-80" source={require("../assets/images/order.png")}/>
   </View>
  )
}
