import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../componant/navbar'
import Icon from 'react-native-vector-icons/Ionicons';


const Home = () => {
    const navigation = useNavigation()
  return (
    <View className='fixed'>
    <Navbar></Navbar>
      
         <View className='container bg-slate-100 w-full h-14'>
          
            <View className='container bg-slate-200 w-48 h-14'>
             <TouchableOpacity className='ml-5 mt-3' onPress={() => navigation.navigate('Pick A Location')}>
               <Icon name='location' size={30}></Icon>
               <Text className='ml-12 -mt-8 text-lg text-slate-950 font-semibold'>Location</Text>
             </TouchableOpacity> 
            </View>

            <View className='container bg-slate-200 w-48 h-14 ml-52 -mt-14'>
            <Text className='font-bold text-black -ml-3 text-4xl mt-1'>|</Text>
             <TouchableOpacity className='ml-5 -mt-8' onPress={() => navigation.navigate('Search')}>
               <Icon name='filter' size={30}></Icon>
               <Text className='ml-12 -mt-8 text-lg text-slate-950 font-semibold'>Category</Text>
             </TouchableOpacity> 
            </View>

         </View>

         
         <ScrollView>

         <TouchableOpacity onPress={() => navigation.navigate('View Product')}>
          <View className='container bg-slate-200 w-96 h-36 rounded-xl ml-4  mt-10'>

          </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('View Product')}>
          <View className='container bg-slate-200 w-80 h-36 rounded-xl ml-10  mt-10'>

          </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('View Product')}>
          <View className='container bg-slate-200 w-80 h-36 rounded-xl ml-10  mt-10'>

          </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('View Product')}>
          <View className='container bg-slate-200 w-80 h-36 rounded-xl ml-10  mt-10'>

          </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('View Product')}>
          <View className='container bg-slate-200 w-80 h-36 rounded-xl ml-10  mt-10'>

          </View>
         </TouchableOpacity>
         
    </ScrollView>
    </View>
  )
}

export default Home