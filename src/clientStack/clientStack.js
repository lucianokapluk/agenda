import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import React from 'react';
import ClientNewView from './clientNewView';
import ClientListView from './clientListView';

import ClientEditView from './clientEditView';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();

const ClientStack = () => {
  const navigation = useNavigation();

  const addButton = (
    <TouchableOpacity
      onPress={() => navigation.navigate('ClientNew')}
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
    <Stack.Navigator initialRouteName="ClientsList" mode="card">
      {/* list of Clients */}
      <Stack.Screen
        name="ClientsList"
        component={ClientListView}
        options={{
          cardStyle: {backgroundColor: 'white'},
          headerRight: () => addButton,
          keyboardHandlingEnabled: false,
          headerTitleAlign: 'center',
          headerTitleAllowFontScaling: true,
        }}
      />
      {/* New Clients */}
      <Stack.Screen
        name="ClientNew"
        component={ClientNewView}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      {/* Edit and Delete Clients */}
      <Stack.Screen
        name="ClientsEdit"
        component={ClientEditView}
        options={{
          cardStyle: {backgroundColor: 'white'},
          headerTitleAlign: 'center',
          headerTitleAllowFontScaling: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default ClientStack;
