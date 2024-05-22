import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageCollection = await firestore().collection('images').get();
      const imageData = imageCollection.docs.map(doc => doc.data().url);
      setImages(imageData);
    };

    fetchImages();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  slide: {
    width: Dimensions.get('window').width - 40, // subtracting marginHorizontal
    height: 200, // Set your desired height
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#22543d', // equivalent to bg-green-900
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default App;


