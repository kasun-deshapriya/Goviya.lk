import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Navbar from '../componant/navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, setDoc, query, where, } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import { Picker } from '@react-native-picker/picker';


const Location = () => {

  const navigation = useNavigation();

  const [selectedLocation, setSelectedLocation] = useState(''); // State for selected location
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'Post'), where('Location', '==', searchInput));
        const querySnapshot = await getDocs(q);
        const searchData = querySnapshot.docs.map(doc => ({
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
        }));
        setFilteredData(searchData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchInput) {
      fetchData();
    } else {
      setFilteredData([]); // Clear the filtered data if search input is empty
    }
  }, [searchInput]);

  const handleCategorySelectSearch = () => {
    navigation.navigate('HomeCopy', { filteredData });
  };


  return (
    <View>
      <View className='bg-slate-200 h-10 mt-3'>
        <TouchableOpacity className='ml-2 mt-2'>
          <Icon name='location' size={25} />
          <Text className='ml-10 -mt-6 font-normal text-blue-800'>Use Your Location</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View>
        <Text className='mt-6 text-center font-semibold text-lg'>Search the location</Text>
        <TextInput className='h-10 ml-8 mr-8 mt-4 bg-slate-100 rounded-xl border-2 border-cyan-700' 
        style={{padding:12}} 
        value={searchInput}
          onChangeText={text => setSearchInput(text)}
          placeholder="search"></TextInput>

        <TouchableOpacity className='ml-80 -mt-8' onPress={() => handleCategorySelectSearch()}>
        <Icon name='search-outline' size={30}></Icon>
        </TouchableOpacity>
      </View>
        <Picker 
          selectedValue={selectedLocation}
          onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}
        >
          <Picker.Item label='Select a location...' value='' />
          <Picker.Item label='Kurunegala' value='Kurunegala' />
          <Picker.Item label='Anuradhapura' value='Anuradhapura' />
          <Picker.Item label='Kandy' value='Kandy' />
          <Picker.Item label='Galgamuwa' value='Galgamuwa' />
          <Picker.Item label='Maho' value='Maho' />
          <Picker.Item label='Dambulla' value='Dambulla' />
        </Picker>
        
      </View>
    </View>
  );
};

export default Location;
