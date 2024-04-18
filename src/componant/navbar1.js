import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function navbar() {
  return (
    <SafeAreaView>
      
      <View className='container  h-39 bg-slate-100 mt-0'>
        <Text className='text-center mt-5 text-blue-900 font-bold'>Welcome To</Text>
      <Text className='font-extrabold mt-0 text-center text-4xl'>Goviya.lk</Text>
      <Text className='text-center mt-3 mb-2 text-blue-900 font-nomal'>Register to Create Account</Text>
    </View>  
    </SafeAreaView>
  )
}