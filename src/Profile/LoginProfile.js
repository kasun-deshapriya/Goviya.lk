import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Navbar from '../componant/navbar4'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  
  const navigation = useNavigation()


  
  return (
    <View>
      <Navbar></Navbar>
      
       <Text className='mt-4 font-bold text-lg ml-24'>Welcome to Goviya.lk</Text>
       <Text className='mt-2 ml-20 font-medium'>Log in to manage your account</Text>

      <View className='bg-slate-300 h-12 mt-5 w-32 ml-36 rounded-xl'>
      <TouchableOpacity className='ml-5 mt-3' onPress={() => navigation.navigate('CreactAcc')}>
      <Icon name='power' size={25}></Icon>
        <Text className='font-bold text-l ml-10 -mt-6'>Log In</Text>
      </TouchableOpacity>
      </View>

      <Text className='mt-2 ml-48 font-medium'>OR</Text>

      <View className='bg-slate-200 h-12 mt-5  ml-4 mr-4 rounded-xl'>
      <TouchableOpacity className='ml-24 mt-3'>
      <Icon name='logo-google' size={25}></Icon>
        <Text className='font-bold text-l ml-10 -mt-6'>Log In with Google</Text>
      </TouchableOpacity>
      </View>

      <View className='h-12 mt-5  ml-4 mr-4 rounded-xl bg-green-900'>
      <TouchableOpacity className='ml-24 mt-3'>
      <Icon name='mail' size={25} ></Icon>
        <Text className='font-bold text-l ml-10 -mt-6 text-white'>Log In with Email</Text>
      </TouchableOpacity>
      </View>

      


    </View>
  )
}

export default Profile