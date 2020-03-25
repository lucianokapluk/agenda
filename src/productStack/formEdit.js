import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
const FormEdit = props => {
  const [nombre, setNombre] = useState('');
  const [medida, setMedida] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [comentario, setComentario] = useState('');
  console.log(props.productEdit, 'asdasddasdsa');
  const dataForm = {nombre, medida, precio, categoria, comentario};
  /*   const navigation = useNavigation();
  const route = useRoute(); */
  return (
    <ScrollView>
      <Input
        placeholder="Nombre Producto"
        label="Nombre"
        defaultValue={props.productEdit.nombreProducto}
        onChangeText={nombreproducto => setNombre(nombreproducto)}
      />
      <Input
        placeholder="Medida"
        label="Medida"
        defaultValue={props.productEdit.medida.toString()}
        onChangeText={medidaPro => setMedida(medidaPro)}
      />
      <Input
        placeholder="Precio"
        label="Precio"
        defaultValue={props.productEdit.precio.toString()}
        onChangeText={precioPro => setPrecio(precioPro)}
      />
      <Input
        placeholder="Categoria"
        label="Categoria"
        defaultValue={props.productEdit.categoria}
        onChangeText={categPro => setCategoria(categPro)}
      />
      <Input
        placeholder="Comentario"
        label="Comentario"
        defaultValue={props.productEdit.comentario}
        onChangeText={comentPro => setComentario(comentPro)}
      />
      {/*      <TouchableOpacity
          onPress={() => PostNewProduct(dataForm, navigation, route)}>
          <Text>Crear</Text>
        </TouchableOpacity> */}
    </ScrollView>
  );
};

export default FormEdit;
