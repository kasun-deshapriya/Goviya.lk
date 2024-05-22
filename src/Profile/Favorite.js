import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'firebase/compat/app';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';

const Favorite = () => {
    const navigation = useNavigation();

    const [users, setUsers] = useState([]); // Ensure useState is imported and used correctly
    const [filteredData, setFilteredData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'Favorite'));
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
          setFilteredData([]);
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

     //delete oder
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'Favorite', id));
      Alert.alert('Delete Success', 'The Favorite Item has been deleted successfully!');
      setFilteredData(filteredData.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting document:', error.message);
    }
  };


  
    return (
      <View className='fixed'>

      <View className='bg-slate-700 h-16'>
        <Text className='font-medium text-xl ml-5 mt-5 text-white'>My Favorites</Text>
      </View>
        <ScrollView>
        <View className='h-fit'>
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
                  <View className='container bg-slate-200 w-96 h-40 rounded-xl ml-4 mt-2 mb-6'>
                    <Text className='ml-48 mt-3 font-bold text-xl'> {user.P_Name}</Text>
                    <Text className='ml-72 -mt-2'> ({user.Category})</Text>
                    <Text className='ml-48 mt-1 text-base text-blue-800'> {user.Units} Killo</Text>
                    <Text className='ml-48 mt-1 text-base'> R.s {user.Price}.00</Text>
                    <TouchableOpacity className='ml-52 mt-3'>
                      <Icon name='location' size={20} />
                      <Text className='ml-7 -mt-5'>{user.Location}</Text>
                    </TouchableOpacity>
                  </View>
                  <View className='container bg-slate-100 w-36 h-32 rounded-xl -mt-40 mb-5 ml-8'>
                    {/* Add your image display logic here if you have image data in 'user.Image' */}
                  </View>

                  <TouchableOpacity className='bg-red-800 w-20 ml-72 rounded-xl h-10 mb-2' onPress={() => handleDelete(user.id)}>
           <Text className='text-center text-white mt-2 font-extrabold'>Delete</Text>
          </TouchableOpacity>
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

export default Favorite