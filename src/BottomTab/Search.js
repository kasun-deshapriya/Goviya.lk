import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../componant/navbar'
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View>
      <Navbar></Navbar>
     <ScrollView>
      <View className='container bg-yellow-400 w-full h-16'>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 mb-20 rounded-xl text-lg text-slate-700' 
      style={{padding:12}} nativeID='serach'></TextInput>
      <TouchableOpacity className='ml-80 -mt-28'>
        <Icon name='search' size={35}></Icon>
        </TouchableOpacity> 
      </View>
     
     <TouchableOpacity>
      <View className='ml-10 mt-28 w-32 h-32 bg-slate-400 border-2 border-cyan-600'>
        <Image source={require('../img/download.jpg')} className='w-24 h-24 rounded-full ml-4 mt-4'></Image>
      </View>
      <Text className='ml-14 mt-2 font-semibold text-lg'>Vegitables</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <View className='ml-56 -mt-40 w-32 h-32 bg-slate-400 border-2 border-cyan-600'>
        <Image source={require('../img/download (1).jpg')} className='w-24 h-24 rounded-full ml-4 mt-4'></Image>
        <Text className='font-semibold text-lg ml-8 mt-5'>Fruits</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View className='ml-36 mt-16 w-32 h-32 bg-slate-400 border-2 border-cyan-600'>
        <Image source={require('../img/images.jpg')} className='w-24 h-24 rounded-full ml-4 mt-4'></Image>
      </View>
      <Text className='ml-44 mt-2 font-semibold text-lg'>Grains</Text>
      </TouchableOpacity>


      </ScrollView>
    </View>
  )
}

export default Search