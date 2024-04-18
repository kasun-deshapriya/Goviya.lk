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
      
        <Text className='ml-10 mt-24 font-medium text-lg'>User Name:</Text>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700'
      style={{padding:12}}  nativeID='UserName'></TextInput>
      
      <Text className='ml-10 mt-5 font-medium text-lg'>Password:</Text>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' 
      style={{padding:12}}   nativeID='Password'></TextInput>
      <TouchableOpacity className='ml-80 -mt-8'>
         <Icon name="eye" size={25} color="black"/> 
         </TouchableOpacity>
       
      <TouchableOpacity>
      <Text className='ml-10 mt-5 text-blue-800'>Reset the Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12 mt-20'
       onPress={() => navigation.navigate('Add Post')}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Login</Text>
       </TouchableOpacity>

       <TouchableOpacity className='ml-12 mr-12 rounded-xl h-12 bg-amber-400 mt-8'
        onPress={() => navigation.navigate('CreactAcc')}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Back</Text>
       </TouchableOpacity>

    </View>
    </View>
  )
}
