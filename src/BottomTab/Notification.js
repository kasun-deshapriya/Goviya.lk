import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import Navbar from '../componant/navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, setDoc, query, where, } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import SliderHome from '../componant/SlideHome';

const Notification = () => {
  const navigation = useNavigation();

  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState('');
  const [logusers, setLogUsers] = useState([]);
 
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
          UserName: doc.data().UserName,
          Description: doc.data().Description,
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

   //select data from user
   useEffect(() => {
    const fetchDataUsers = async () => {
      try {
        const querySnapshotUsers = await getDocs(collection(db, 'users'));
        const UsersData = querySnapshotUsers.docs.map(docuser => ({
          U_id: docuser.id,
          Name: docuser.data().Name,
        }));
        setLogUsers(UsersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataUsers();
  }, []);

   //Select data using product name// 
   useEffect(() => {
    const fetchDataOrder = async () => {
      try {
        const q = query(collection(db, 'Order'), where('P_Username', '==', 'Kasun GK'));
        const querySnapshotOrder = await getDocs(q);
        const searchData = querySnapshotOrder.docs.map(doc1 => ({
          id: doc1.id,
          P_Name: doc1.data().P_Name, // Assuming 'P_Name' is the field name for product name
          Price: doc1.data().Price, // Assuming 'Price' is the field name for price
          Units: doc1.data().Units,
          Location: doc1.data().Location,
          Category: doc1.data().Category,
          C_Number: doc1.data().C_Number,
          Email: doc1.data().Email,
          C_UserName: doc1.data().C_UserName,
          Address: doc1.data().Address,
        }));
        setFilteredData(searchData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (logusers.Name) {
      fetchDataOrder();
    } else {
      setFilteredData([]); // Clear the filtered data if search input is empty
    }
  }, [logusers.Name]);
 

  return (
    <View>

      <ScrollView>
      <View className=' bg-slate-300 h-screen'>
    {users && users.length > 0 ? (
      users.map(user => (
        <TouchableOpacity key={user.id}
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
              UserName: user.UserName,
              productDescription: user.Description,
            })
          }>
                <View className='container bg-slate-200 w-96 h-20 rounded-xl ml-4 mt-1'>
                <Text className='ml-4 mt-3 font-bold text-l'> A New Post By {user.UserName} ({user.Location})</Text>
                  <Text className='ml-8 mt-3 font-bold '> {user.P_Name}, {user.Units} Killo, R.s {user.Price}.00</Text> 
                </View>
                </TouchableOpacity>
                    ))
                ) : (
                    <Text className='font-medium text-base ml-40 mt-72 animate-spin text-cyan-950 fon'>Loading....</Text>
                )}
            </View>
  
    <View
      data={filteredData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View>
          <Text >Product Name: {item.P_Name}</Text>
          <Text >Price: {item.Price}</Text>
          <Text >Units: {item.Units}</Text>
          <Text >Location: {item.Location}</Text>
          <Text >Category: {item.Category}</Text>
          <Text >Contact Number: {item.C_Number}</Text>
          <Text >Email: {item.Email}</Text>
          <Text >Customer Username: {item.C_UserName}</Text>
          <Text >Address: {item.Address}</Text>
        </View>
      )}
    />
    </ScrollView> 
    </View>
  )
}

export default Notification