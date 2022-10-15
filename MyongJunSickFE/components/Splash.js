import React, {useRef, useEffect} from 'react';
import {Animated, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {fontPercentage, heightPercentage, widthPercentage} from '../Responsive';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default function Splash() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/landing_background.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <FadeInView style={styles.fade}>
          <Image style={styles.logo} source={require('../assets/images/Logo.png')} />
        </FadeInView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: widthPercentage(160),
    height: heightPercentage(160),
    marginLeft: widthPercentage(134),
    objectFit: 'cover',
  },
  fade: {
    flex: 1,
    justifyContent: 'center',
  },
});
