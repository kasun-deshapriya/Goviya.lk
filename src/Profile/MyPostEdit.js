import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { updateDoc , doc } from 'firebase/firestore';
import { db,} from '../../firebaseconfig';


const AddProduct = ({ route }) => {

    const { productId, productName, productCategory, productUnits, productPrice, productLocation, productAddress,
        phoneNumber, Email, UserName, productDescription } = route.params; // Assuming you have an optional productImageUri property
    
  const navigation = useNavigation()

    const [selectedImage, setSelectedImage] = useState(null); // stores image URIs

  //Update data data to the Database
  const [selectedCategory, setSelectedCategory] = useState('');
  const [p_name, setp_name] = useState('');
  const [units, setunits] = useState('');
  const [price, setprice] = useState('');
  const [location, setlocation] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [c_number, setc_number] = useState('');
  const [description, setdescription] = useState('');
  const [ImageURL, setImageURL] = useState('');

  const SubmitData = async () => {

    if (selectedCategory=="" && p_name=="" && units=="" && price=="" && location=="" && address==""
    && email=="" && username=="" && c_number=="" && description=="" && ImageURL==""
    ) {
      Alert.alert('Can not Post Your Add', 'Please fill in all fields');
      return;
    }
      
      try {
        const docRef = doc(db, "Post", productId);
        // Once the image is uploaded, add the data to Firestore
          // Update the document in Firestore
    await updateDoc(docRef, {
          Category: selectedCategory,
          P_Name: p_name,
          Units: units,
          Price: price,
          Location: location,
          Address: address,
          Email: email,
          userName: username,
          C_Number: c_number,
          Description: description,
          ImageURL: ImageURL,
        });
        
        console.log('Data Updated');

        Alert.alert('Post Updated', 'Successfully updated post!', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('LoginProfile',{UserName}); // Navigate to 'Home' screen after success alert
            },
          },
        ]);
      } catch (error) {
        console.error('Error submitting data:', error);
        Alert.alert('Error', 'Failed to Update post. Please try again.');
      }
  };

   

  return (
    <ScrollView>

      <View className='bg-slate-200 h-16'>
        <Text className='font-medium text-xl ml-5 mt-5'>You can Edit Your Post</Text>
      </View>

      <Text className='ml-5 mt-4 font-medium text-base'>Selcte Category of the Product :</Text>
      <View className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700'>
      <Picker 
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label={productCategory} value={productCategory} />
          <Picker.Item label='Vegitabels' value='Vegitabels' />
          <Picker.Item label='Fruits' value='Fruits' />
          <Picker.Item label='Grains' value='Grains' />
        </Picker>
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Product Name :  ({productName})</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            onChangeText={setp_name}
             value={p_name}
            ></TextInput>
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>No of Units :  ({productUnits})</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={units}
            onChangeText={setunits}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Unit Price :  ({productPrice})</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={price}
            onChangeText={setprice}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Location :  ({productLocation})</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={location}
            onChangeText={setlocation}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Address :  ({productAddress})</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={address}
            onChangeText={setaddress}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Email :</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={Email}
            onChangeText={setemail}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>UserName :</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={UserName}
            onChangeText={setusername}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Contact Number :  ({phoneNumber})</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={c_number}
            onChangeText={setc_number}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Description :  ({productDescription})</Text>
            <TextInput className='bg-white h-24 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
           value={description}
           onChangeText={setdescription}
           />
        </View>   
        

        <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12 mt-20 mb-7'
      onPress={SubmitData}> 
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Update Post</Text>
       </TouchableOpacity>

    </ScrollView>
  )
}

export default AddProduct 