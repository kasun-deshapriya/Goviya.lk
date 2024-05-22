import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Navbar from '../componant/navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, setDoc, query, where, } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import SliderHome from '../componant/SlideHome';

const Search = () => {
  const navigation = useNavigation();

  const [users, setUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  //select data from categori wise
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
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredData = users.filter(user => user.Category === selectedCategory);
      setFilteredPosts(filteredData);
    } else {
      setFilteredPosts(users);
    }
  }, [selectedCategory, users]);

 

  //Select data using product name// 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'Post'), where('P_Name', '==', searchInput));
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
    navigation.navigate('Search Products', { filteredData });
  };
  

  return (
    <View>
      <Navbar></Navbar>
    
      <View className='container bg-yellow-400 w-full h-16'>
      <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 mb-20 rounded-xl text-lg text-slate-700' 
      style={{padding:12}} 
      value={searchInput}
        onChangeText={text => setSearchInput(text)}
        placeholder="search with Item Name"></TextInput>

      <TouchableOpacity className='ml-80 -mt-28' onPress={() => handleCategorySelectSearch()}>
        <Icon name='search' size={35}></Icon>
        </TouchableOpacity> 
      </View>

      
     
      <ScrollView>
      <View className='mb-44'>
    {users && users.length > 0 ? (
      users.map(user => (
        <TouchableOpacity
          key={user.id}
          onPress={() =>
            navigation.navigate('View Product', {
              productId: user.id,
              productName: user.P_Name,
              productCategory: user.Category,
              productUnits: user.Units,
              productPrice: user.Price,
              productLocation: user.Location,
              phoneNumber: user.C_Number,
              Email: user.Email,
              productDescription: user.Description,
            })
          }
        >
                <View className='container bg-slate-200 w-96 h-40 rounded-xl ml-4 mt-10'>
                  <Text className='ml-48 mt-3 font-bold text-xl'> {user.P_Name}</Text>
                  <Text className='ml-72 -mt-2'> ({user.Category})</Text>
                  <Text className='ml-48 mt-1 text-base text-blue-800'> {user.Units} Killo</Text>
                  <Text className='ml-48 mt-1 text-base'> R.s {user.Price}.00</Text>
                  <TouchableOpacity className='ml-52 mt-3'>
                    <Icon name='location' size={20} />
                    <Text className='ml-7 -mt-5'>{user.Location}</Text>
                  </TouchableOpacity>
                </View>
                <View className='container bg-slate-100 w-36 h-32 rounded-xl -mt-36 mb-3 ml-8'>
                 
                </View>

                        </TouchableOpacity>
                    ))
                ) : (
                    <Text className='font-medium text-base ml-40 mt-72 animate-spin text-cyan-950 fon'>Loading....</Text>
                )}
            </View>
  </ScrollView> 
     
    </View>
  )
}

export default Search