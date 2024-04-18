import { View, TextInput, TouchableOpacity, Text, StyleSheet, } from 'react-native'
import * as React from 'react'
import Navbar3 from '../componant/navbar3';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
  const navigation = useNavigation()
  return (
    <View>
       <Navbar3></Navbar3>

    <View className='container bg-slate-200 w-auto h-full'>
      
       
       
      <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12 mt-20' 
       onPress={() => navigation.navigate('Login')}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Login</Text>
       </TouchableOpacity>

       <TouchableOpacity className='ml-12 mr-12 rounded-xl h-12 bg-amber-400 mt-8'
       onPress={() => navigation.navigate('Home')}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Back</Text>
       </TouchableOpacity>

       <Text className='mt-12 text-center'>Do not have Account? </Text>
       <TouchableOpacity className='mt-2'>
        <Text className='text-center font-blue font-semibold text-blue-800' onPress={() => navigation.navigate('Register')}>Register Here!</Text>
       </TouchableOpacity>
       

    </View>
    </View>
  )
}
