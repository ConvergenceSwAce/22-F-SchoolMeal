import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Linking, Text, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingPage from '../screens/SettingScreen';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import NotificationScreen from '../screens/NotificationScreen';

const BottomTab = createBottomTabNavigator();

function SearchScreen() {
  return <Text>Search</Text>;
}

interface TabBarProps {
  color: string;
  size: number;
}

const BottomTabNavigation = () => {
  const insets = useSafeAreaInsets();

  const MyTheme = {
    dark: false,
    colors: {
      primary: '#071648',
      card: '#fff',
      text: '#071648',
      border: '#071648',
      notification: '#071648',
      background: '#fff',
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <BottomTab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#071648',
            tabBarInactiveTintColor: '#BCBCBC',
            tabBarStyle: {
              elevation: 0,
              borderTopWidth: 0.2,
              borderRadius: 20,
              backgroundColor: '#fff',
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
            name="공지사항"
            component={NotificationScreen}
            options={{
              title: '공지사항',
              tabBarIcon: ({color, size}: TabBarProps) => (
                <Icon name="bullhorn" color={color} size={size} />
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPressOut={() => {
                    Linking.openURL('https://www.mju.ac.kr/mjukr/255/subview.do');
                  }}
                  className="items-center"
                >
                  <Text className="text-[#071648] font-bold text-[15px] p-[10px] items-center">
                    바로가기 👈🏻
                  </Text>
                </TouchableOpacity>
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
