import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, ToastAndroid, Text, View, StyleSheet} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-tiny-toast';

const ProductListView = route => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    await fetch('http://192.168.0.103:3000/api/productos')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => this.setState({hasErrors: true}));
  };

  useEffect(() => {
    fetchUrl();
  }, [navigation, route]);

  const [search, setSearch] = useState(0);
  const updateSearch = () => {
    setSearch(search);
  };

  return (
    <>
      <SearchBar
        placeholder="Type Here..."
        round
        lightTheme
        containerStyle={{backgroundColor: 'white', borderBottomColor: 'white'}}
        onChangeText={updateSearch}
      />

      <View style={{backgroundColor: 'red'}}>
        <Toast />
      </View>
      <ScrollView>
        {data.map((item, i) => (
          <ListItem
            key={i}
            title={item.nombreProducto}
            subtitle={item.categoria}
            rightTitle={'$ ' + item.precio}
            onPress={() => navigation.navigate('ProductsEdit', item)}
            bottomDivider
            chevron
          />
        ))}
      </ScrollView>
    </>
  );
};

export default ProductListView;
