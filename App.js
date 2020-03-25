/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import ClientStack from './src/clientStack/clientStack';
import ProductStack from './src/productStack/productStack';

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

const hiddenTab = route => {
  if (route.state !== undefined) {
    if (route.state.routes[1]) {
      return false;
    }
  } else {
    return true;
  }
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Clientes"
        component={ClientStack}
        options={({route}) => ({
          tabBarVisible: hiddenTab(route),
        })}
      />
      <Tab.Screen
        name="Productos"
        component={ProductStack}
        options={({route}) => ({
          tabBarVisible: hiddenTab(route),
        })}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
