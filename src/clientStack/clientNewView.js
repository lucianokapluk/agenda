import React from 'react';

import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const ClientNewView = () => {
  return (
    <ScrollView>
      <Input placeholder="Nombre" label="Nombre" />
      <Input placeholder="Apellido" label="Apellido" />
      <Input placeholder="Telefono" label="Telefono" />
      <Input placeholder="Email" label="Email" />
      <Input placeholder="Estado" label="Estado" />
      <Input placeholder="Comentario" label="Comentario" />
    </ScrollView>
  );
};

export default ClientNewView;
