import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

import {useNavigation, useRoute} from '@react-navigation/native';
const alertOk = (navigation, data, route) => {
  console.log(route.name);

  Alert.alert(
    'Se a creado un nuevo producto!',
    data,
    [
      {
        text: 'OK',
        onPress: () =>
          navigation.navigate('ProductsList', {params: route.name}),
      },
    ],
    {cancelable: false},
  );
};
const PostNewProduct = (dataForm, navigation, route) => {
  fetch('http://192.168.0.103:3000/api/productos', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombreProducto: dataForm.nombre,
      medida: dataForm.medida,
      precio: dataForm.precio,
      categoria: dataForm.categoria,
      comentario: dataForm.comentario,
    }),
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data.product.nombreProducto);
      const dataName = String(data.product.nombreProducto);
      alertOk(navigation, dataName, route);
    });
};
const ProductNewView = () => {
  const [nombre, setNombre] = useState('');
  const [medida, setMedida] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [comentario, setComentario] = useState('');
  const dataForm = {nombre, medida, precio, categoria, comentario};
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <ScrollView>
      <Input
        placeholder="Nombre Producto"
        label="Nombre"
        onChangeText={nombreproducto => setNombre(nombreproducto)}
      />
      <Input
        placeholder="Medida"
        label="Medida"
        onChangeText={medidaPro => setMedida(medidaPro)}
      />
      <Input
        placeholder="Precio"
        label="Precio"
        onChangeText={precioPro => setPrecio(precioPro)}
      />
      <Input
        placeholder="Categoria"
        label="Categoria"
        onChangeText={categPro => setCategoria(categPro)}
      />
      <Input
        placeholder="Comentario"
        label="Comentario"
        onChangeText={comentPro => setComentario(comentPro)}
      />
      <TouchableOpacity
        onPress={() => PostNewProduct(dataForm, navigation, route)}>
        <Text>Crear</Text>
      </TouchableOpacity>
      <ActivityIndicator size="large" color="#0000ff" />
    </ScrollView>
  );
};

export default ProductNewView;
