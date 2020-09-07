import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MIcons from 'react-native-vector-icons/MaterialIcons';
import MComIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './HomeScreen';
import CameraScreen from './CameraScreen';
import WorkoutScreen from './WorkoutScreen';


const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            if (route.name === 'Home') {
              return <MIcons name='home' size={size} color={color} />;
            } else if (route.name === 'Camera') {
              return <MIcons name='camera-alt' size={size} color={color} />;
            }else if (route.name === 'Workout'){
              return <MComIcons name='dumbbell' size={size} color={color}/>;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#61dafb',
          inactiveTintColor: 'gray',
          adaptive: false,
          style: styles.navBar,
          lazy: false,
          showLabel: false,
        }}
        backBehavior={'history'}
      >
        <Tab.Screen name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: 'Home' }}/>
        <Tab.Screen name="Camera" component={CameraScreen} options={{tabBarVisible:false}}/>
        <Tab.Screen name="Workout" component={WorkoutScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};
//
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ffffff',
    height: 50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
