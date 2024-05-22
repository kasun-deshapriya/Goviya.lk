import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import Navbar1 from '../componant/navbar1';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);


  const validateFields = (name, email, password, confirmPassword) => {
    const errors = [];
  
    if (!name.trim()) {
      errors.push('Please enter your name.');
    }
  
    if (!email.trim()) {
      errors.push('Please enter your email address.');
    } else if (!validateEmail(email)) {
      errors.push('Please enter a valid email address.');
    }
  
    if (!password.trim()) {
      errors.push('Please enter a password.');
    } else if (password.length < 6) {
      errors.push('Password must be at least 6 characters long.');
    }
  
    if (!confirmPassword.trim()) {
      errors.push('Please confirm your password.');
    } else if (password !== confirmPassword) {
      errors.push('Passwords do not match.');
    }
  
    return errors;
  };
  
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
    const handleValidation = () => {
      const errors = validateFields(name, email, password, confirmPassword);
  
      if (errors.length > 0) {
        let errorMessage = 'Please fix the following errors:\n';
        errors.forEach((error) => (errorMessage += `- ${error}\n`));
        Alert.alert('Validation Errors', errorMessage);
      } else {
        Alert.alert('Success', 'SuccessFully Register with App',[
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login'); // Navigate to 'Add Post' screen after success alert
            },
          },
        ]);
        // You can proceed with form submission or other actions here
      
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
  }
    const toggleSecureText = () => {
      setSecureText((prevSecureText) => !prevSecureText); // Toggle the secureText state
    };
  

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
          secureTextEntry={secureText}
        />
        
        <TextInput
        className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' style={{padding:12}}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={secureText}
        />
        <TouchableOpacity className='ml-80 -mt-8' onPress={toggleSecureText}>
         <Icon name={secureText ? 'eye-off' : 'eye'} size={25} color="black"/> 
         </TouchableOpacity>

        <TouchableOpacity
        className='bg-slate-800 ml-12 mr-12 mt-10 rounded-xl h-12'
          onPress={handleValidation}
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
