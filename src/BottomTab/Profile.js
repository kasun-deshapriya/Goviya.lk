import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import Navbar from '../componant/navbar4'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

const Profile = ({ route }) => {

    const { userName } = route.params;
    const [users, setUsers] = useState([]);
  
  const navigation = useNavigation()


  const LoginOut = () => {
    Alert.alert('Successfully Log Out', 'You have to successfully Log out',[
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('profile'); // Navigate to 'Add Post' screen after success alert
          },
        },
      ]);
  }
  const PassUserName =() => {

  }
  
  return (
    <View>
      <Navbar></Navbar>
      <View className='bg-slate-200 h-16'>
        <Text className='font-medium text-xl ml-5 mt-5'>{userName}</Text>
      </View>

      <View className='bg-slate-200 h-16 mt-8 ml-2 mr-2 rounded-md'>
      <TouchableOpacity className='ml-5 mt-5' onPress={() => navigation.navigate('Add Post' , { userName })}>
      <Icon name='add-circle' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Add Post</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-200 h-16 mt-2 ml-2 mr-2 rounded-md'>
      <TouchableOpacity className='ml-5 mt-5' onPress={() => navigation.navigate('My Post', { userName })}>
      <Icon name='albums' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>My Post</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-200 h-16 mt-2 ml-2 mr-2 rounded-md'>
      <TouchableOpacity className='ml-5 mt-5' onPress={() => navigation.navigate('Favorite Posts')}>
      <Icon name='star' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Favorites</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-200 h-16 mt-2 ml-2 mr-2 rounded-md'>
      <TouchableOpacity className='ml-5 mt-5' onPress={() => navigation.navigate('My Oders' , { userName })}>
      <Icon name='cart' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>My Orders</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-200 h-16 mt-2 ml-2 mr-2 rounded-md'>
      <TouchableOpacity className='ml-5 mt-5' onPress={() => navigation.navigate('Setting', { userName })}>
      <Icon name='settings' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Settings</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-200 h-16 mt-2 ml-2 mr-2 rounded-md'>
      <TouchableOpacity className='ml-5 mt-5' onPress={() => navigation.navigate('Message', { userName })}>
      <Icon name='send' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Contact-Us</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-300 h-16 mt-5 ml-2 mr-2 rounded-md'>
      <TouchableOpacity className='ml-5 mt-5' onPress={LoginOut}>
      <Icon name='power' size={25}></Icon>
        <Text className='font-medium text-xl ml-10 -mt-8 text-red-800'>Log Out</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}

export default Profile