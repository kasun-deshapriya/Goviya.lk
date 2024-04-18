import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Message = () => {
  const navigation = useNavigation()
  return (
    <View>
    
    <View className='container bg-slate-200 w-auto h-full scroll-auto'>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-16 rounded-xl text-lg text-slate-700'
      style={{padding:12}}  placeholder="Name" nativeID='Name'></TextInput>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' 
      style={{padding:12}}  placeholder="Email" nativeID='Email'></TextInput>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' 
      style={{padding:12}}  placeholder="Subject" nativeID='Subject'></TextInput>

      <TextInput className='bg-white h-32 ml-8 mr-8 mt-8 mb-10 rounded-xl text-lg text-slate-700' 
      style={{padding:12,paddingTop:-35}}  placeholder="Message" nativeID='Message'></TextInput>
      
       <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12'>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Send</Text>
       </TouchableOpacity>

       <TouchableOpacity className='ml-12 mr-12 rounded-xl h-12 bg-amber-400 mt-8'
          onPress={() => navigation.navigate('profile')}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Back</Text>
       </TouchableOpacity>
       
    </View>
    </View>
  )
}

export default Message