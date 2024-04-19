import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import Navbar1 from '../componant/navbar1';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function SubmitData() {
    addDoc(collection(db, "U_Register"), {
      Name: name,
      Email: email,
      Password: password,
    }).then(() => {
      console.log('Data Submitted');
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <View>
      <Navbar1 />
      <View className='container bg-slate-200 w-auto h-full'>
        <TextInput
        className='bg-white h-12 ml-8 mr-8 mt-24 rounded-xl text-lg text-slate-700' style={{padding:12}}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
        className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' style={{padding:12}}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
        className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' style={{padding:12}}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
        className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' style={{padding:12}}
          placeholder="Confirm Password"
        />

        <TouchableOpacity
        className='bg-slate-800 ml-12 mr-12 mt-10 rounded-xl h-12'
          onPress={SubmitData}
        >
          <Text className='text-center text-white text-lg mt-2 font-extrabold'>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
        className='ml-12 mr-12 rounded-xl h-12 bg-amber-400 mt-5'
          onPress={() => navigation.navigate('CreactAcc')}
        >
          <Text className='text-center text-white text-lg mt-2 font-extrabold'>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
