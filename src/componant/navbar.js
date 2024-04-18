import { View, Text, TextInput, StyleSheet ,StatusBar, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon component

export default function navbar() {
  return (
    <SafeAreaView className='bg-slate-800 text-cyan-50' >
      <StatusBar/>
      <View className='container h-24 bg-slate-800 mt-0 fixed'>
      <Text className='font-extrabold text-white mt-5 text-center  text-3xl'>Goviya.lk</Text>
       <Image source={require('../img/logo-color.png')} className='w-10 h-10 rounded-full ml-72 -mt-14'></Image>
    </View>  
    </SafeAreaView>
  )
}