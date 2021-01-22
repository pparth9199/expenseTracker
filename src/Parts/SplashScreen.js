import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import splashImage from './splashImage.png';
export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={splashImage} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
