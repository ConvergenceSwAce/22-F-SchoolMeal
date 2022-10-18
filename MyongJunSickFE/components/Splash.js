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
      <FadeInView style={styles.fade}>
        <View style={styles.logoContainer}>
          <ImageBackground
            source={require('../assets/images/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </FadeInView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071648',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    width: widthPercentage(160),
    height: heightPercentage(160),
    marginLeft: widthPercentage(134),
  },
  logo: {
    flexGrow: 1,
  },
  fade: {
    flex: 1,
    justifyContent: 'center',
  },
});
