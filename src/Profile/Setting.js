import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { collection, getDocs, deleteDoc , doc} from 'firebase/firestore';
import { db } from '../../firebaseconfig';


const Setting = ({ route }) => {

  const { userName } = route.params;
   
  const navigation = useNavigation()

  const [users, setUsers] = useState([]);

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

    // Delete Account
    const handleDelete = async () => {
      try {
        // Find the user by username
        const user = users.find(user => userName === user.Name);

        if (user) {
          await deleteDoc(doc(db, 'U_Register', user.id));
          Alert.alert('Delete Success', 'The account has been deleted successfully!', [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('profile'); // Navigate to login profile
              },
            },
          ]);
          setUsers(users.filter(item => item.id !== user.id));
        } else {
          Alert.alert('Delete Failed', 'Username not found. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting document:', error.message);
        Alert.alert('Error', 'Failed to delete account. Please try again.');
      }
    };


  return (
    <View>
      
      <View className='bg-slate-200 h-16 mt-12 ml-2 mr-2 rounded-md'>
      <TouchableOpacity className='ml-5 mt-4' onPress={() => navigation.navigate('Change Password')}>
      <Icon name='cog' size={25}></Icon>
        <Text className='font-medium text-l ml-10 -mt-6'>Change Password</Text>
      </TouchableOpacity>
      </View>

      <View className='bg-slate-200 h-16 mt-5 ml-2 mr-2 rounded-md'>
      <TouchableOpacity className='ml-5 mt-5' onPress={handleDelete}>
      <Icon name='trash' size={25}></Icon>
        <Text className='font-medium text-xl ml-10 -mt-7 text-red-800'>Delete Account</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Setting