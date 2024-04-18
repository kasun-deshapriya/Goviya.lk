import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function navbar() {
  return (
    <SafeAreaView>
      
      <View className='container h-24 bg-slate-800 '>
        
      <Text className='font-extrabold mt-6 ml-10 text-white  text-3xl'>Contact Us</Text>
      
    </View>  
    </SafeAreaView>
  )
}