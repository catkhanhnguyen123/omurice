// OnboardingScreen.js
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import OnboardingScreen1 from '@/screens/onboardings/OnboardingScreen1';
import OnboardingScreen2 from '@/screens/onboardings/OnboardingScreen2';
import OnboardingScreen3 from '@/screens/onboardings/OnboardingScreen3';

const OnboardingScreen = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPress = () => {
    swiperRef.current.scrollBy(1);
  };

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* View bao bọc cả Swiper và nút "Next" hoặc "Finish" */}
      <View style={styles.wrapper}>
        <Swiper
          ref={swiperRef}
          dotColor="#ffe1cc"
          activeDotColor='#FF6A00'
          style={styles.swiper}
          showsButtons={false}
          onIndexChanged={(index) => handleIndexChanged(index)}
        >
          <View style={styles.slide}>
            <OnboardingScreen1 />
          </View>
          <View style={styles.slide}>
            <OnboardingScreen2 />
          </View>
          <View style={styles.slide}>
            <OnboardingScreen3 />
          </View>
        </Swiper>

        {/* Nút Next hoặc Finish */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
          <Text style={styles.nextButtonText}>{currentIndex === 2 ? 'Finish' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  // Thêm wrapper để bao bọc cả Swiper và nút "Next" hoặc "Finish"
  wrapper: {},
  swiper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    borderRadius: 30,
    bottom: 20,
    backgroundColor: '#FF6A00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
