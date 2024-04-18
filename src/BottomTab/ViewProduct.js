import { View, Text , Image, ImageBackground , ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const ViewProduct = () => {
  return (
    <ScrollView>
      
        <View className='bg-slate-200 h-48 ml-10 mr-10 mt-10 rounded-2xl'>
          
        </View>

        <View>
        <Text className='font-semibold text-xl mt-10 ml-10'>Product Name</Text>
        <Text className='font-nomal text-l mt-3 ml-10'>Galgamuwa</Text>
        <Text className='font-semibold text-xl ml-36 mt-2 text-blue-800'>R.s 600.00</Text>
        <Text className='font-nomal text-l -mt-6 ml-72'>Negotiable</Text>
        </View> 

        <View className='bg-slate-200 h-10 ml-1 mr-32 mt-10 rounded-2xl'>
         <Text className='font-semibold text-xl ml-3 mt-1'>Contact Information</Text>
        </View>

        <View>
          <Text className='font-medium ml-10 mt-4'>Phone Number-</Text>
          <Text className='font-medium ml-48 -mt-5'>0775518779</Text>
          <Text className='font-medium ml-10 mt-4'>Email-</Text>
          <Text className='font-medium ml-48 -mt-5'>kasund564@gmail.com</Text>
        </View>

        <View className='bg-slate-200 h-10 ml-1 mr-32 mt-10 rounded-2xl'>
         <Text className='font-semibold text-xl ml-3 mt-1'>Description</Text>
        </View>

        <View>
          <Text className='font-medium ml-10 mr-10 mt-4'>Green chili 1000 kg , R.s 600 .00 per one kilo</Text>
          
          
        </View>

        <TouchableOpacity className='bg-slate-800 ml-12 mr-12 mt-14 rounded-xl h-12'>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Call</Text>
       </TouchableOpacity>

    </ScrollView>
  )
}

export default ViewProduct