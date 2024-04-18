import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState(''); // State for selected location

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
        <TextInput className='h-10 ml-8 mr-8 mt-4 bg-slate-100 rounded-xl border-2 border-cyan-700' style={{padding:12}} nativeID='serach'></TextInput>
        <TouchableOpacity className='ml-80 -mt-8'>
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
        </Picker>
        
      </View>
    </View>
  );
};

export default Location;
