import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const slides = [
    {
      title: 'Welcome To Goviya.lk',
      subtitle: 'Get best experience',
    },
    {
      title: 'You Can Add Post',
      subtitle: 'Publish you Product',
    },
    {
      title: 'You Can Sell Products',
      subtitle: 'Get more Profit',
    },
    {
      title: 'You Can Order Products',
      subtitle: 'Find your Product',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: currentIndex * (Dimensions.get('window').width - 40), animated: true });
    }
  }, [currentIndex]);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
      style={styles.scrollView}
    >
      {slides.map((slide, index) => (
        <View key={index} style={styles.slide} className='bg-slate-70'>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.subtitle}>{slide.subtitle}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
    marginTop: 20,
    marginRight: 20,
  },
  slide: {
    width: Dimensions.get('window').width - 40, // subtracting marginHorizontal
  },
  title: {
    fontSize: 24, // equivalent to text-3xl
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16, // equivalent to text-l
    fontWeight: '500',
    color: 'black',
  },
});

export default Slider;
