import { View, Text, StyleSheet, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import Navbar from '../componant/navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, deleteDoc, query, where, } from 'firebase/firestore';
import { db } from '../../firebaseconfig';

const MyOders = ({ route }) => {
    const { userName } = route.params;

    const navigation = useNavigation();

    const [users, setUsers] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
  
  //Select data using product name// 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'Order'), where('Username', '==', userName));
        const querySnapshot = await getDocs(q);
        const searchData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          P_Name: doc.data().P_Name, // Assuming 'P_Name' is the field name for product name
          Price: doc.data().Price, // Assuming 'Price' is the field name for price
          Units: doc.data().Units,
          Location: doc.data().Location,
          Category: doc.data().Category,
          C_Number: doc.data().C_Number,
          Email: doc.data().Email,
          Address: doc.data().Address,
        }));
        setFilteredData(searchData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (userName) {
      fetchData();
    } else {
      setFilteredData([]); // Clear the filtered data if search input is empty
    }
  }, [userName]);

  //delete oder
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'Order', id));
      Alert.alert('Delete Success', 'The order has been deleted successfully!');
      setFilteredData(filteredData.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting document:', error.message);
    }
  };


  return (
    <View>
<ScrollView>
      {filteredData.map(item => (
        <View key={item.id}>
          <View className='container bg-slate-200 w-96 h-80 rounded-xl ml-4 mt-10'>
          <Text className='ml-48 mt-3 font-bold text-xl'> {item.P_Name}</Text>
          <Text className='ml-72 -mt-2'> ({item.Category})</Text>
          <Text className='ml-48 mt-1 text-base text-blue-800'> {item.Units} Killo</Text>
          <Text className='ml-48 mt-1 text-base'> R.s {item.Price}.00</Text>
          <TouchableOpacity className='ml-52 mt-3'>
            <Icon name='location' size={20} />
            <Text className='ml-7 -mt-5'>{item.Location}</Text>
          </TouchableOpacity>
        </View>
        <View className='container bg-slate-100 w-36 h-32 rounded-xl -mt-72 mb-3 ml-8'>
          {/* Add your image display logic here if you have image data in 'user.Image' */}
        </View>

        <TouchableOpacity className='bg-slate-800 w-20 ml-48 rounded-xl h-10 mt-2'>
          <Text className='text-center text-white  mt-2 font-extrabold'>Conform</Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-red-800 w-20 ml-72 -mt-10 rounded-xl h-10 mb-2' onPress={() => handleDelete(item.id)}>
          <Text className='text-center text-white mt-2 font-extrabold'>Delete</Text>
          </TouchableOpacity>
        
        </View>
        
      ))}
 </ScrollView>    
    </View>
  )
}

export default MyOders