import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import * as React from 'react'
import Navbar1 from '../componant/navbar1';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';


export default function Register() {
  const navigation = useNavigation()

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  
   function SubmitData () {

    setDoc(doc(db, "U_Register", "yGIsihUfSMGvK6uDOSZr"),{
      Name: Name,
      Email: Email,
      Password: Password,
    }).then(() => {
      console.log('Data Submit');
    }).catch((error => {
      console.log(error);
    }));

   }


  return (
    <View>
       <Navbar1></Navbar1>

    <View className='container bg-slate-200 w-auto h-full'>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-24 rounded-xl text-lg text-slate-700'
      style={{padding:12}}  placeholder="Name" value={Name} onChangeText={(Name) => {setName(Name)}}> </TextInput>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' 
      style={{padding:12}}  placeholder="Email" value={Email} onChangeText={(Email) => {setEmail(Email)}}></TextInput>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' 
      style={{padding:12}}  placeholder="password" value={Password} onChangeText={(Password) => {setPassword(Password)}}></TextInput>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-8 mb-20 rounded-xl text-lg text-slate-700' 
      style={{padding:12}}  placeholder="confirm Password" nativeID='C-Password'></TextInput>
      
       
      <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12' onPress={SubmitData}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Register</Text>
       </TouchableOpacity>

      <TouchableOpacity className='ml-12 mr-12 rounded-xl h-12 bg-amber-400 mt-5'
       onPress={() => navigation.navigate('CreactAcc')}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Back</Text>
       </TouchableOpacity>

    </View>
    </View>
  )
}
