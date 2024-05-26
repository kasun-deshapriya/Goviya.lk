import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import { useState } from 'react';


const Message = ({ route }) => {
  const { userName } = route.params;
  const navigation = useNavigation()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const validateFields = (name, email, subject, message) => {
    const errors = [];
  
    if (!name.trim()) {
      errors.push('Please enter your name.');
    }
  
    if (!email.trim()) {
      errors.push('Please enter your email address.');
    } else if (!validateEmail(email)) {
      errors.push('Please enter a valid email address.');
    }
  
    if (!subject.trim()) {
      errors.push('Please enter a password.');
    } 
  
    if (!message.trim()) {
      errors.push('Please confirm your password.');
    } 
  
    return errors;
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  function SubmitMessage() {
    const errors = validateFields(name, email, subject, message);
  
    if (errors.length > 0) {
      let errorMessage = 'Please fix the following errors:\n';
      errors.forEach((error) => (errorMessage += `- ${error}\n`));
      Alert.alert('Message Send Unsuccess', errorMessage);
    }
    else{
    addDoc(collection(db, "Contact_Us"), {
      Name: name,
      Email: email,
      Subject: subject,
      Message: message,
    }).then(() => {
      console.log('Data Submitted');
      Alert.alert('Message Send Success', `Your Message Send Successfully!!`,[
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('LoginProfile',{userName}); 
          },
        },
      ]);;
    }).catch((error) => {
      console.log(error);
    });
  }
  }
  return (
    <View>
    
    <View className='container bg-slate-200 w-auto h-full scroll-auto'>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-16 rounded-xl text-lg text-slate-700' style={{padding:12}}  
      placeholder="Name"
      value={name}
      onChangeText={setName}></TextInput>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' style={{padding:12}} 
      placeholder="Email" 
      value={email}
      onChangeText={setEmail}></TextInput>

      <TextInput className='bg-white h-12 ml-8 mr-8 mt-8 rounded-xl text-lg text-slate-700' style={{padding:12}}  
      placeholder="Subject"
      value={subject}
      onChangeText={setSubject}></TextInput>

      <TextInput className='bg-white h-32 ml-8 mr-8 mt-8 mb-10 rounded-xl text-lg text-slate-700' style={{padding:12,paddingTop:-35}} 
      placeholder="Message"
      value={message}
      onChangeText={setMessage}></TextInput>
      
       <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12' 
       onPress={SubmitMessage} >
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Send</Text>
       </TouchableOpacity>

       
       
    </View>
    </View>
  )
}

export default Message