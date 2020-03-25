import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';
const list = [
  {
    name: 'Luciano Kapluk',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',

    subtitle: 'Vice President',
    telefono: '3584349043',
    localidad: 'Rio Cuarto',
    direccion: 'alicia moreau de justo ',
    email: 'kaplukluciano@gmail.com',
    estado: '  debe',
    comentario: 'asdas',
  },
  {
    name: 'Pepes',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',

    subtitle: 'Vice President',
    telefono: '3584349043',
    localidad: 'Rio Cuarto',
    direccion: 'alicia moreau de justo ',
    email: 'kaplukluciano@gmail.com',
    estado: '  debe',
    comentario: 'asdas',
  },
  {
    name: 'Roman Riquelme',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',

    subtitle: 'Vice President',
    telefono: '3584349043',
    localidad: 'Rio Cuarto',
    direccion: 'alicia moreau de justo ',
    email: 'kaplukluciano@gmail.com',
    estado: '  debe',
    comentario: 'asdas',
  },
];

const ClientListView = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState(0);
  const updateSearch = () => {
    setSearch(search);
    console.log(search);
  };
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({item}) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{source: {uri: item.avatar_url}}}
      bottomDivider
      chevron
      onPress={() => navigation.navigate('ClientsEdit', item)}
    />
  );
  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        round
        lightTheme
        containerStyle={{backgroundColor: 'white', borderBottomColor: 'white'}}
        onChangeText={updateSearch}
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ClientListView;
