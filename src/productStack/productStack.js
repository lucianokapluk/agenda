import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import React from 'react';
import productNewView from './productNewView';
import productListView from './productListView';

import productEditView from './productEditView';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();

const productStack = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();

  const addButton = (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductNew')}
      style={{paddingRight: 10}}>
      <Icon
        raised
        name="plus-circle"
        type="font-awesome"
        size={30}
        color="#f50"
      />
    </TouchableOpacity>
  );

  return (
    <Stack.Navigator initialRouteName="productsList" mode="card">
      {/* list of products */}
      <Stack.Screen
        name="ProductsList"
        component={productListView}
        options={{
          cardStyle: {backgroundColor: 'white'},
          headerRight: () => addButton,
          keyboardHandlingEnabled: false,
          headerTitleAlign: 'center',
          headerTitleAllowFontScaling: true,
        }}
      />
      {/* New products */}
      <Stack.Screen
        name="ProductNew"
        component={productNewView}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      {/* Edit and Delete products */}
      <Stack.Screen
        name="ProductsEdit"
        component={productEditView}
        options={{
          cardStyle: {backgroundColor: 'white'},
          headerTitleAlign: 'center',
          headerTitleAllowFontScaling: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default productStack;
