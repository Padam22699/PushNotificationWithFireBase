import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../Componet/Header';
import Product from '../Componet/Product';

const Home = ({navigation}) => {
  const Products = [
    {
      name: 'Samsung',
      color: 'Pink',
      price: 20000,
      qty: 1,
    },
    {
      name: 'Apple',
      color: 'red',
      price: 400000,
      qty: 1,
    },
    {
      name: 'Vivo',
      color: 'blue',
      price: 34000,
      qty: 1,
    },
    {
      name: 'Nokia',
      color: 'yellow',
      price: 3000,
      qty: 1,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{}}
        onPress={() => {
          navigation.navigate('UserList');
        }}>
        <Text style={{fontSize: 20}}>UserList</Text>
      </TouchableOpacity>
      {/* <Button
        style={{width: '100%'}}
        title="UserList"
        onPress={navigation.navigate('UserList')}
      /> */}
      <Header />
      <ScrollView>
        {Products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
