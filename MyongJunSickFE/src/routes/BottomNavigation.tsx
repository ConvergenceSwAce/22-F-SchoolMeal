import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingPage from '../screens/SettingScreen';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';

const BottomTab = createBottomTabNavigator();

function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

interface TabBarProps {
  color: string;
  size: number;
}

const BottomTabNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#071648',
            tabBarStyle: {
              elevation: 0,
              paddingBottom: insets.bottom,
            },
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: '홈',
              headerShown: false,
              tabBarIcon: ({color, size}: TabBarProps) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: '룰렛',
              tabBarIcon: ({color, size}: TabBarProps) => (
                <Icon name="random" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
              title: '맛집지도',
              tabBarIcon: ({color, size}: TabBarProps) => (
                <Icon name="map" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Setting"
            component={SettingPage}
            options={{
              title: '설정',
              tabBarIcon: ({color, size}: TabBarProps) => (
                <Icon name="sliders" color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default BottomTabNavigation;
