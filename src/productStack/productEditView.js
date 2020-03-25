import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-tiny-toast';

import {Avatar, Button, PricingCard, Overlay} from 'react-native-elements';
import FormEdit from './formEdit';
const editButton = (
  <TouchableOpacity style={{paddingRight: 10}}>
    <Icon name="edit" type="font-awesome" size={30} color="#f50" />
  </TouchableOpacity>
);

const alertDeleteOk = (navigation, dataProduct, route) => {
  Alert.alert(
    'Esta seguro que quiere eliminar el producto',
    dataProduct.nombreProducto,
    [
      {
        text: 'OK',
        onPress: () => deleteProduct(dataProduct, navigation, route),
      },
      {text: 'Cancelar'},
    ],
    {cancelable: false},
  );
};
const Toasts = async nombreProd => {
  await Toast.show('Se elimino con exito el producto!' + nombreProd, {
    position: Toast.position.bottom,
    containerStyle: {backgroundColor: '#38CAAD'},
    textStyle: {color: 'white', fontSize: 20},
  });
};
const deleteProduct = (product, navigation, route) => {
  console.log(product.nombreProducto, 'breack');
  fetch('http://192.168.0.103:3000/api/productos/' + product._id, {
    method: 'DELETE',
  })
    .then(res => res.text()) // or res.json()
    .then(res => {
      navigation.navigate('ProductsList', {params: route.route.name});
      Toasts(product.nombreProducto);
    });
};

const ProductEditView = route => {
  const [OverlayState, setOverlayState] = useState(false);
  const deleteButton = (
    <TouchableOpacity
      style={{paddingRight: 10}}
      onPress={() => alertDeleteOk(navigation, dataProduct, route)}>
      <Icon name="trash" type="font-awesome" size={30} color="red" />
    </TouchableOpacity>
  );
  const navigation = useNavigation();
  const dataProduct = route.route.params;
  navigation.setOptions({
    headerTitle: dataProduct.nombreProducto,
    headerRight: () => deleteButton,
  });
  console.log(dataProduct);

  return (
    <View style={styles.bodyClient}>
      {/* <Text>{dataProduct._id}</Text> */}
      <View style={styles.cont}>
        <PricingCard
          color="#4f9deb"
          title={dataProduct.nombreProducto + 'sdssdasdsa'}
          price={'$' + dataProduct.precio}
          info={[
            'Categoria: ' + dataProduct.categoria,
            'Medida: ' + dataProduct.medida,
            'Comentario: ' + dataProduct.comentario,
          ]}
          button={{title: 'editar', icon: 'flight-takeoff'}}
          onButtonPress={() => {
            setOverlayState(true);
          }}
        />
        <Overlay isVisible={OverlayState}>
          <TouchableOpacity
            onPress={() => {
              setOverlayState(false);
            }}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text>Hello from Overlay!</Text>
          <FormEdit productEdit={dataProduct} />
        </Overlay>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyClient: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  cont: {},
  titles: {
    fontSize: 20,
  },
  editButton: {
    flexDirection: 'row-reverse',
  },
});
export default ProductEditView;
