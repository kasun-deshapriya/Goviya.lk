import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../componant/navbar'; 
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'firebase/compat/app';
import { getDocs, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';

const Grains = ({ route }) => {
  const { filteredData } = route.params;
  const navigation = useNavigation();

  // Now you can use filteredData in your component

  return (
    <View>
      
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
          <TouchableOpacity className='ml-5 -mt-8' onPress={() => navigation.navigate('Home')}>
            <Icon name='filter' size={30} />
            <Text className='ml-12 -mt-8 text-lg text-slate-950 font-semibold'>Grains</Text>
          </TouchableOpacity>
        </View>
      </View>


      {filteredData.map(item => (
        <TouchableOpacity
        key={item.id}
          onPress={() =>
            navigation.navigate('View Product', {
              productId: item.id,
              productName: item.P_Name,
              productCategory: item.Category,
              productUnits: item.Units,
              productPrice: item.Price,
              productLocation: item.Location,
              phoneNumber: item.C_Number,
              Email: item.Email,
              productDescription: item.Description,
            })
          }>
        <View key={item.id}>
          <View className='container bg-slate-200 w-96 h-40 rounded-xl ml-4 mt-10'>
          <Text className='ml-48 mt-3 font-bold text-xl'> {item.P_Name}</Text>
          <Text className='ml-72 -mt-2'> ({item.Category})</Text>
          <Text className='ml-48 mt-1 text-base text-blue-800'> {item.Units} Killo</Text>
          <Text className='ml-48 mt-1 text-base'> R.s {item.Price}.00</Text>
          <TouchableOpacity className='ml-52 mt-3'>
            <Icon name='location' size={20} />
            <Text className='ml-7 -mt-5'>{item.Location}</Text>
          </TouchableOpacity>
        </View>
        <View className='container bg-slate-100 w-36 h-32 rounded-xl -mt-36 mb-3 ml-8'>
          {/* Add your image display logic here if you have image data in 'user.Image' */}
        </View>
        </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Grains;
