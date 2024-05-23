import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'; // Assuming you're using React Native
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';


const ViewProduct = ({ route }) => {
  const { productId, productName, productCategory, productUnits, productPrice, productLocation,
    phoneNumber, productImageUri, Email, productDescription, UserName } = route.params; // Assuming you have an optional productImageUri property

    const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Optional: Fetch additional product information based on productId if needed
    console.log('Fetching additional product details for:', productId);
  }, [productId]);

  const navigation = useNavigation();

   //Pass data to the Database for faverite post
   const SubmitData = async () => {
     addDoc(collection(db, "Favorite"), {
       P_Name: productName,
       Units: productUnits,
       Price: productPrice,
       Location: productLocation,
       Category: productCategory,
       C_Number: phoneNumber,
       Email: Email,
       Description: productDescription,
     }).then(() => {
       console.log('Data Submitted');
       Alert.alert('Add to Favoite' , 'Item has been successfuly add to Favorite')
       setIsVisible(false);
     }).catch((error) => {
       console.log(error);
     });
    }

  

  return (
    <ScrollView>
     <View>
      <View className='bg-slate-200 h-48 ml-10 mr-10 mt-10 rounded-2xl'/>
      <View>
      <Text className='font-semibold text-xl mt-10 ml-10'>{productName}</Text>
      <Text className='font-nomal text-l -mt-6 ml-44'>({productCategory})</Text>

      <TouchableOpacity className='font-nomal text-l -mt-7 ml-80' onPress={SubmitData}>
        <Icon name='star-outline' size={30}></Icon>
      </TouchableOpacity>

      <Text className='font-nomal text-l mt-3 ml-10'>{productLocation}</Text>
      <Text className='font-semibold text-xl ml-36 mt-2 text-blue-800'>R.s {productPrice}.00</Text>
      <Text className='font-nomal text-l -mt-6 ml-72'>Negotiable</Text>
      </View> 

      <View>
        <Text className='text-l mt-2 ml-10'>{productUnits} Killo in stock</Text>
      </View>

      <View className='bg-slate-200 h-10 ml-1 mr-32 mt-8 rounded-2xl'>
       <Text className='font-semibold text-xl ml-3 mt-1'>Contact Information</Text>
      </View>

      <View>
        <Text className='font-medium ml-10 mt-4'>Phone Number-</Text>
        <Text className='font-medium ml-48 -mt-5'>{phoneNumber}</Text>
        <Text className='font-medium ml-10 mt-4'>Email-</Text>
        <Text className='font-medium ml-48 -mt-5'>{Email}</Text>
      </View>

      <View className='bg-slate-200 h-10 ml-1 mr-32 mt-10 rounded-2xl'>
       <Text className='font-semibold text-xl ml-3 mt-1'>Description</Text>
      </View>

      <View>
        <Text className='font-medium ml-10 mr-10 mt-4'>{productDescription}</Text>
        
        
      </View>

      <TouchableOpacity className='bg-slate-800 ml-12 mr-12 mt-14 mb-10 rounded-xl h-12'
      onPress={() => navigation.navigate('Place the Order',{
        productName: productName,
        productCategory: productCategory,
        productPrice: productPrice,
        productUnits: productUnits,
        ProductEmail:Email,
        UserName:UserName
      })}>
      <Text className='text-center text-white text-lg mt-2 font-extrabold'>Order</Text>
     </TouchableOpacity>
     </View>
  </ScrollView>
   )
  }
export default ViewProduct;
