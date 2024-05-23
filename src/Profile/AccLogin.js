import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import Navbar3 from '../componant/navbar3';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import React, { useState, useEffect } from 'react';


export default function AccLogin() {
  const navigation = useNavigation()
  const [users, setUsers] = useState([]);

  //get user data from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'U_Register'));
        const usersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          Name: doc.data().Name, 
          Password: doc.data().Password, 
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

    const toggleSecureText = () => {
      setSecureText((prevSecureText) => !prevSecureText); // Toggle the secureText state
    };

    const handleLogin = () => {
      const user = users.find(user => user.Name === name && user.Password === password);
      if (user) {
        Alert.alert('Login Success', `Welcome back, ${user.Name}!`,[
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('LoginProfile', { userName: user.Name }); // Navigate to 'Add Post' screen after success alert
            },
          },
        ]);;
        // Navigate to the home screen or perform other actions upon successful login
      } else {
        Alert.alert('Login Failed', 'Invalid name or password. Please try again.',)
      }
    };

  return (
    <View>
       <Navbar3></Navbar3>

    <View className='container bg-slate-200 w-auto h-full'>
      
        <Text className='ml-10 mt-24 font-medium text-lg'>User Name:{users.Name}</Text>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700'
      style={{padding:12}}  
      value={name}
      onChangeText={setName}></TextInput>
      
      <Text className='ml-10 mt-5 font-medium text-lg'>Password:</Text>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' 
      style={{padding:12}}  
      value={password}
      onChangeText={setPassword}
      secureTextEntry={secureText}
      ></TextInput>

      <TouchableOpacity className='ml-80 -mt-8' onPress={toggleSecureText}>
         <Icon name={secureText ? 'eye-off' : 'eye'} size={25} color="black"/> 
         </TouchableOpacity>
       
      <TouchableOpacity onPress={() => navigation.navigate('Change Password')}>
      <Text className='ml-10 mt-5 text-blue-800'>Reset the Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12 mt-20'
       onPress={handleLogin}>
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
