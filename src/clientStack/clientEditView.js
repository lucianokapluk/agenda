import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Button} from 'react-native-elements';

/* const editButton = (
  <TouchableOpacity
    onPress={() => navigation.navigate('ClientNew')}
    style={{paddingRight: 10}}>
    <Icon name="edit" type="font-awesome" size={30} color="#f50" />
  </TouchableOpacity>
); */
const deleteButton = (
  <TouchableOpacity
    onPress={() => navigation.navigate('ClientNew')}
    style={{paddingRight: 10}}>
    <Icon name="trash" type="font-awesome" size={30} color="red" />
  </TouchableOpacity>
);
const ClientEditView = route => {
  const navigation = useNavigation();
  const dataClient = route.route.params;
  navigation.setOptions({
    headerTitle: dataClient.name,
    headerRight: () => deleteButton,
  });
  console.log(route);

  return (
    <View>
      <View style={styles.avatar}>
        <Avatar rounded size="large" title={dataClient.name[0]} />
      </View>

      <View style={styles.editButton}>{editButton}</View>

      <View style={styles.bodyClient}>
        <Text style={styles.titles}>Telefono</Text>
        <Text>{dataClient.telefono}</Text>

        <Text style={styles.titles}>Localidad</Text>
        <Text>{dataClient.localidad}</Text>
        <Text style={styles.titles}>Direccion</Text>
        <Text>{dataClient.direccion}</Text>
        <Text style={styles.titles}>Email</Text>
        <Text>{dataClient.email}</Text>
        <Text style={styles.titles}>Estado</Text>
        <Text>{dataClient.estado}</Text>
        <Text style={styles.titles}>Comentario</Text>
        <Text>{dataClient.comentario}</Text>
      </View>
      <Button title="Ver Pedidos" type="outline" />
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
  bodyClient: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
  },
  titles: {
    color: 'green',
    fontSize: 18,
  },
  editButton: {
    flexDirection: 'row-reverse',
  },
});
export default ClientEditView;
