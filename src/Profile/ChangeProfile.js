import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs, updateDoc , doc} from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import React, { useState, useEffect } from 'react';


export default function ChangeProfile() {
  const navigation = useNavigation()
  const [users, setUsers] = useState([]);

  const [oldname, setOldName] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  // Get user data from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'U_Register'));
        const usersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          Name: doc.data().Name,
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const toggleSecureText = () => {
    setSecureText(prevSecureText => !prevSecureText); // Toggle the secureText state
  };

  // Update Profile
  const handleLogin = async () => {
    const user = users.find(user => user.Name === oldname);
    if (user && name !== '' && password !== '' && password === confirmPassword) {
      try {
        const docRef = doc(db, 'U_Register', user.id);

        await updateDoc(docRef, {
          Name: name,
          Password: password,
        });

        Alert.alert('Update Success', 'Now Login With New Password', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('AccLoging'); // Navigate to 'Add Post' screen after success alert
            },
          },
        ]);
      } catch (error) {
        console.error('Error submitting data:', error);
        Alert.alert('Error', 'Failed to update post. Please try again.');
      }
    } else {
      Alert.alert('Update Failed', 'Invalid name or password. Please try again.');
    }
  };


  return (
    <View>

    <View className='container bg-slate-200 w-auto h-full'>

    <Text className='ml-10 mt-5 font-medium text-lg'>Old User Name:</Text>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700'
      style={{padding:12}}  
      value={oldname}
      onChangeText={setOldName}></TextInput>
      
        <Text className='ml-10 mt-5 font-medium text-lg'>New User Name:</Text>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700'
      style={{padding:12}}  
      value={name}
      onChangeText={setName}></TextInput>
      
      <Text className='ml-10 mt-5 font-medium text-lg'>New Password:</Text>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' 
      style={{padding:12}}  
      value={password}
      onChangeText={setPassword}
      secureTextEntry={secureText}
      ></TextInput>

     <Text className='ml-10 mt-5 font-medium text-lg'>Re-Enter New Password:</Text>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' 
      style={{padding:12}}   
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      secureTextEntry={secureText}
      ></TextInput>

      <TouchableOpacity className='ml-80 -mt-8' onPress={toggleSecureText}>
         <Icon name={secureText ? 'eye-off' : 'eye'} size={25} color="black"/> 
         </TouchableOpacity>
       

      <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12 mt-20'
       onPress={handleLogin}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Save</Text>
       </TouchableOpacity>


    </View>
    </View>
  )
}
