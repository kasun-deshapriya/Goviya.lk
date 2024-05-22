import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../componant/navbar'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { getDocs, collection, doc, setDoc } from 'firebase/firestore';
import Slider from '../componant/Slide';
import { db } from '../../firebaseconfig';

const Home = () => {
  const navigation = useNavigation();

  const [users, setUsers] = useState([]); // Ensure useState is imported and used correctly

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Post'));
        const usersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          P_Name: doc.data().P_Name, // Assuming 'P_Name' is the field name for product name
          Price: doc.data().Price, // Assuming 'Price' is the field name for price
          Units: doc.data().Units,
          Location: doc.data().Location,
          Category: doc.data().Category,
          Image: doc.data().Image,
          C_Number: doc.data().C_Number,
          Email: doc.data().Email,
          Description: doc.data().Description,
          ImageURL: doc.data().ImageURL,
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategorySelect = category => {
    const filteredData = users.filter(user => user.Category === category);
    navigation.navigate('Vegitables', { filteredData });
  };

  const handleCategorySelect1 = category => {
    const filteredData = users.filter(user => user.Category === category);
    navigation.navigate('Fruits', { filteredData });
  };

  const handleCategorySelect2 = category => {
    const filteredData = users.filter(user => user.Category === category);
    navigation.navigate('Grains', { filteredData });
  };

  return (
    <View className='fixed'>
      <ScrollView >
      <Navbar></Navbar>

      <View className='container bg-slate-100 w-full h-14'>
        <View className='container bg-slate-200 w-48 h-14'>
          <TouchableOpacity
            className='ml-5 mt-3'
            onPress={() => navigation.navigate('Pick A Location')}
          >
            <Icon name='location' size={30} />
            <Text className='ml-12 -mt-8 text-lg text-slate-950 font-semibold'>Location</Text>
          </TouchableOpacity>
        </View>

        <View className='container bg-slate-200 w-48 h-14 ml-52 -mt-14'>
          <Text className='font-bold text-black -ml-3 text-4xl mt-1'>|</Text>
          <TouchableOpacity className='ml-5 -mt-8' onPress={() => navigation.navigate('Search')}>
            <Icon name='filter' size={30} />
            <Text className='ml-12 -mt-8 text-lg text-slate-950 font-semibold'>Products</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Slider></Slider>
      
 
      <TouchableOpacity onPress={() => handleCategorySelect('Vegitabels')}>
      <View className='ml-10 mt-20 w-32 h-32 bg-slate-400 border-2 border-cyan-600'>
        <Image source={require('../img/download.jpg')} className='w-24 h-24 rounded-full ml-4 mt-4'></Image>
      </View>
      <Text className='ml-14 mt-2 font-semibold text-lg'>Vegitables</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCategorySelect1('Fruits')}>
      <View className='ml-56 -mt-40 w-32 h-32 bg-slate-400 border-2 border-cyan-600'>
        <Image source={require('../img/download (1).jpg')} className='w-24 h-24 rounded-full ml-4 mt-4'></Image>
        <Text className='font-semibold text-lg ml-8 mt-5'>Fruits</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCategorySelect2('Grains')}>
      <View className='ml-36 mt-16 w-32 h-32 bg-slate-400 border-2 border-cyan-600'>
        <Image source={require('../img/images.jpg')} className='w-24 h-24 rounded-full ml-4 mt-4'></Image>
      </View>
      <Text className='ml-44 mt-2 font-semibold text-lg'>Grains</Text>
      </TouchableOpacity>

      </ScrollView>        
    </View>
  )
}

export default Home