import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Platform, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // for image picking
import * as FileSystem from'expo-file-system';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../firebaseconfig';


const AddProduct = ({ route }) => {

  const { userName } = route.params;
  const navigation = useNavigation()

    const [selectedImage, setSelectedImage] = useState(null); // stores image URIs
    const [uploading, setUploading] = useState([false]);
    const [downloadURL, setDownloadURL] = useState('');
  
    const pickImage = async () => {
      // Check for camera roll permissions (optional)
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to choose an image.');
          return;
        }
      }
  
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setSelectedImage( result.assets[0].uri); // update images array with new image URI
      }
    };


  //Pass data to the Database
  const [selectedCategory, setSelectedCategory] = useState('');
  const [p_name, setp_name] = useState('');
  const [units, setunits] = useState('');
  const [price, setprice] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [c_number, setc_number] = useState('');
  const [description, setdescription] = useState('');
  const [ImageURL, setImageURL] = useState('');

  const SubmitData = async () => {

    if (selectedCategory=="" && p_name=="" && units=="" && price=="" && selectedLocation=="" && address==""
    && email=="" && username=="" && c_number=="" && description=="" && ImageURL==""
    ) {
      Alert.alert('Can not Post Your Add', 'Please fill in all fields');
      return;
    }
    if (selectedImage) {
      setUploading(true); // Set uploading state to true
      
      try {
        // Upload the image first
        const downloadURL = await uploadImage();
        
        // Once the image is uploaded, add the data to Firestore
        const docRef = await addDoc(collection(db, "Post"), {
          Category: selectedCategory,
          P_Name: p_name,
          Units: units,
          Price: price,
          Location: selectedLocation,
          Address: address,
          Email: email,
          userName: username,
          C_Number: c_number,
          Description: description,
          ImageURL: ImageURL,
        });
        
        console.log('Data Submitted');
        
        Alert.alert('Post Submitted', 'Successfully submitted post!', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Home'); // Navigate to 'Home' screen after success alert
            },
          },
        ]);
      } catch (error) {
        console.error('Error submitting data:', error);
        Alert.alert('Error', 'Failed to submit post. Please try again.');
      }
      
      setUploading(false); // Set uploading state back to false
    } else {
      Alert.alert('Error', 'Please select an image.');
    }
  };
    
  const uploadImage1 = async () => {

    const reference = storage().ref(imageData.assets[0].filename);
    const pathToFile = imageData.assets[0].uri;

    await reference.putFile(pathToFile);
    const uri = await storage()
    .ref(imageData.assets[0].filename)
    .getDownloadURL();
    console.log(uri);
    Alert.alert('Upload Success', 'Image uploaded successfully!', [
      {
        text: 'OK',
        onPress: () => {
           
        },
      },
    ]);
  }

    const uploadImage = async () => {
      if (selectedImage) { // Check if an image is selected
        setUploading(true); // Set uploading state to true (optional for UI feedback)
    
        try {
          // Firebase Storage setup
          const storage = getStorage();
    
          // Generate a unique filename
          const filename = `${Math.random().toString(36).substring(2, 15)}.jpg`; // Using Math.random from JavaScript for consistency
    
          // Create a reference to the storage location
          const imageRef = ref(storage, `images/${filename}`);
    
          // Get the image data as a blob
          const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', selectedImage);
            xhr.responseType = 'blob';
            xhr.onload = () => resolve(xhr.response);
            xhr.onerror = reject;
            xhr.send();
          });
    
          // Upload the image to Firebase Storage
          await uploadBytes(imageRef, blob);
          console.log(imageRef)
         
          Alert.alert('Upload Success', 'Image uploaded successfully!', [
            {
              text: 'OK',
              onPress: () => {
                 
              },
            },
          ]);
        } catch (error) {
          console.error('Error uploading image:', error);
          // Handle error or display an alert
        }
    
        setUploading(false); // Set uploading state back to false after upload is complete
      }
    };
     

  return (
    <ScrollView>

      <View className='bg-slate-200 h-16'>
        <Text className='font-medium text-xl ml-5 mt-5'>{`Welcome to, ${userName}!`}</Text>
      </View>

      <Text className='ml-5 mt-4 font-medium text-base'>Selcte Category of the Product :</Text>
      <View className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700'>
      <Picker 
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label=' ' value='' />
          <Picker.Item label='Vegitabels' value='Vegitabels' />
          <Picker.Item label='Fruits' value='Fruits' />
          <Picker.Item label='Grains' value='Grains' />
        </Picker>
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Product Name :</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={p_name}
            onChangeText={setp_name}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>No of Units :</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={units}
            onChangeText={setunits}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Unit Price :</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={price}
            onChangeText={setprice}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Location :</Text>
            <View className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700'>
      <Picker 
          selectedValue={selectedLocation}
          onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}
        >
          <Picker.Item label=' ' value='' />
          <Picker.Item label='Kurunegala' value='Kurunegala' />
          <Picker.Item label='Wariyapola' value='Wariyapola' />
          <Picker.Item label='Ibbagamuwa' value='Ibbagamuwa' />
          <Picker.Item label='Polpithimaga' value='Polpithimaga' />
          <Picker.Item label='Padeniya' value='Padeniya' />
          <Picker.Item label='Daladagama' value='Daladagama' />
          <Picker.Item label='Maho' value='Maho' />
          <Picker.Item label='Nikawaratiya' value='Nikawaratiya' />
          <Picker.Item label='Abanpola' value='Abanpola' />
          <Picker.Item label='Galgamuwa' value='Galgamuwa' />
          <Picker.Item label='Polgahawela' value='Polgahawela' />
          <Picker.Item label='Pannala' value='Pannala' />
          <Picker.Item label='Alawwa' value='Alawwa' />
          <Picker.Item label='Hettipola' value='Hettipola' />
        </Picker>
        </View>
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Address :</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={address}
            onChangeText={setaddress}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Email :</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={email}
            onChangeText={setemail}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>UserName :</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={username}
            onChangeText={setusername}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Contact Number :</Text>
            <TextInput className='bg-white h-12 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
            value={c_number}
            onChangeText={setc_number}
            />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Description :</Text>
            <TextInput className='bg-white h-24 ml-8 mr-8 mt-2 rounded-xl text-lg text-slate-700' style={{padding:12}}
           value={description}
           onChangeText={setdescription}
           />
        </View>

        <View>
            <Text className='ml-5 mt-4 font-medium text-base'>Add Images :</Text>
            <TouchableOpacity className='bg-slate-800 w-20 rounded-xl h-12 mt-2 ml-5'  onPress={() => pickImage(0)}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Add</Text>
       </TouchableOpacity>
        </View>

        <View className='ml-5'> 
        {selectedImage && (
                <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, marginTop: 20 }} />
            )}
            </View>

            
            <TouchableOpacity className='bg-slate-800 ml-5 w-24  rounded-xl h-12 mt-4'
         onPress={uploadImage}> 
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Upload</Text>
       </TouchableOpacity>    
        

        <TouchableOpacity className='bg-slate-800 ml-12 mr-12 rounded-xl h-12 mt-20'
      onPress={SubmitData}> 
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Post</Text>
       </TouchableOpacity>

       <TouchableOpacity className='ml-12 mr-12 rounded-xl h-12 bg-amber-400 mt-5 mb-5'
        onPress={() => navigation.navigate('Home')}>
        <Text className='text-center text-white text-lg mt-2 font-extrabold'>Back</Text>
       </TouchableOpacity>

    </ScrollView>
  )
}

export default AddProduct 