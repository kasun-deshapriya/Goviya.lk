import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../componant/navbar4'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Navbar></Navbar>
      <View className='bg-slate-200 h-16'>
        <Text className='font-medium text-xl ml-5 mt-5'>Kasun Deshapriya</Text>
      </View>

      <View className='bg-slate-100 h-16 mt-8'>
      <TouchableOpacity className='ml-5 mt-3'>
      <Icon name='cart' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>My Ads</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-100 h-16 mt-1'>
      <TouchableOpacity className='ml-5 mt-3'>
      <Icon name='star' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Favorites</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-100 h-16 mt-1'>
      <TouchableOpacity className='ml-5 mt-3'>
      <Icon name='call' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Mobile Numbers</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-100 h-16 mt-1'>
      <TouchableOpacity className='ml-5 mt-3'>
      <Icon name='settings' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Settings</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-100 h-16 mt-1'>
      <TouchableOpacity className='ml-5 mt-3' onPress={() => navigation.navigate('Message')}>
      <Icon name='send' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Contact-Us</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-100 h-16 mt-5'>
      <TouchableOpacity className='ml-5 mt-3'>
      <Icon name='power' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Log Out</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}

export default Profile