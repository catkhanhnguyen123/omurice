// OnboardingScreen2.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const OnboardingScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        {/* Sử dụng component Svg để hiển thị logo từ file SVG trong thư mục assets */}
        <SvgUri
          width="40"
          height="40"
          source={require('../../../assets/Logo.svg')}
        />
        <Text style={styles.appName}>Omurice</Text>
        <Text style={styles.slogan}>Cook it your way</Text>
        {/* <Image source={require('../../../assets/Onboarding1.svg')}/> */}
      </View>
      <View style={styles.middleContent}>
        {/* Sử dụng URI để tải hình ảnh từ nguồn xa */}
        <Image
          source={{ uri: 'https://i.ibb.co/YDbWC1J/image-9-1.png' }}
          style={{ width: 220, height: 280, marginTop: 20, marginBottom: 40 }}
        />
        <Text style={styles.suggestText}>Suggest Suitable Dishes</Text>
        <Text style={styles.suggestSubText}>Suggest dishes based on your ingredients and your taste.</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 20,
  },
  upperContent: {
    alignItems: 'center',
    marginBottom: 30, // Thêm margin để tạo khoảng cách từ trên xuống
  },
  middleContent: {
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FF6A00',
  },
  slogan: {
    fontSize: 16,
    marginTop: 5,
    color: '#919495',
  },
  suggestText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  suggestSubText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#919495',
  },
};

export default OnboardingScreen2;
