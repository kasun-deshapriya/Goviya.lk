import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';


const Order = ({ route }) => {
  const {
    productName,
    productCategory,
    productPrice,
    productUnits,
  } = route.params;
 // Assuming you have an optional productImageUri property
  

  const navigation = useNavigation()

 // const [selectedCategory, setSelectedCategory] = useState(''); // State for selected

  //Pass data to the Database
  const [location, setlocation] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [Username, setUsername] = useState('');
  const [c_number, setc_number] = useState('');

  function SubmitData() {

  if (location=="" && address=="" && email=="" && c_number=="" && Username=="") {
    Alert.alert('Can not Place the Order', 'Please fill in all fields');
    return;
  }

  addDoc(collection(db, "Order"), {
    Category: productCategory,
    P_Name: productName,
    Units: productUnits,
    Price: productPrice,
    Location: location,
    Address: address,
    Email: email,
    C_Number: c_number,
    Username: Username,
  }).then(() => {
    console.log('Data Submitted');
   
    Alert.alert('Order Success', 'Successfully placed your order!', [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Goviya.lk '); // Navigate to 'Home' screen after success alert
        },
      },
    ]);
  }).catch((error) => {
    console.log(error);
    Alert.alert('Error', 'Failed to place order. Please try again.');
  });
}

  return (
    <ScrollView>
      <View>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-5 rounded-xl text-lg font-semibold text-slate-700' style={{paddingLeft:18}}
            placeholder='Category'
            editable={false}
            >{productCategory}</TextInput>
        </View>

        <View>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-5 rounded-xl text-lg font-semibold text-slate-700' style={{paddingLeft:18}}
            placeholder='Product Name'
            editable={false}
            >{productName}</TextInput>
        </View>

        <View>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-5 rounded-xl text-lg font-semibold text-slate-700' style={{paddingLeft:18}}
            placeholder='Unit Price'
            editable={false}
            >R.s. {productPrice}.00</TextInput>
            
        </View>

        <View>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-5 rounded-xl text-lg font-semibold text-slate-700' style={{paddingLeft:18}}
            placeholder='No of Units'
           
            >{productUnits} Kg</TextInput>
        </View>

        <View>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-5 rounded-xl text-lg font-semibold text-slate-700' style={{paddingLeft:18}}
            value={location}
            onChangeText={setlocation}
            placeholder='Your Location '
            ></TextInput>
        </View>

        <View>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-5 rounded-xl text-lg font-semibold text-slate-700' style={{paddingLeft:18}}
            value={address}
            onChangeText={setaddress}
            placeholder='Your Address'
            ></TextInput>
        </View>

        <View>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-5 rounded-xl text-lg font-semibold text-slate-700' style={{paddingLeft:18}}
            value={email}
            onChangeText={setemail}
            placeholder='Email'
            ></TextInput>
        </View>

        <View>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-5 rounded-xl text-lg font-semibold text-slate-700' style={{paddingLeft:18}}
            value={Username}
            onChangeText={setUsername}
            placeholder='Your UserName'
            ></TextInput>
        </View>

        <View>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-5 rounded-xl text-lg font-semibold text-slate-700' style={{paddingLeft:18}}
            value={c_number}
            onChangeText={setc_number}
            placeholder='Contact Number'
            ></TextInput>
        </View>


        <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12 mt-20'
        onPress={SubmitData}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Place Order</Text>
       </TouchableOpacity>

       <TouchableOpacity className='ml-12 mr-12 rounded-xl h-12 bg-amber-400 mt-5 mb-5'
        onPress={() => navigation.navigate('Goviya.lk ')}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Back</Text>
       </TouchableOpacity>

    </ScrollView>
  )
}

export default Order