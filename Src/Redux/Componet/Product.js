import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart, removeToCart} from '../Action/Action';
import {useDispatch, useSelector} from 'react-redux';
const Product = props => {
  let item = props.item;
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.AddCartReducer);
  const [exitData, setExitDtata] = useState(false);
  useEffect(() => {
    let result = cartData.filter(data => {
      return data.name === item.name;
    });
    if (result.length) {
      setExitDtata(true);
    } else {
      setExitDtata(false);
    }
  }, [cartData]);
  const handleAddToCart = data => {
    dispatch(addToCart(data));
  };
  const hnadleRemoveToCart = data => {
    dispatch(removeToCart(data.name));
  };
  return (
    <View
      key={item.name}
      style={{
        marginHorizontal: 10,
        flexDirection: 'row',
        marginTop: 20,
      }}>
      <View>
        <Image
          source={require('../../assest/image/S.jpg')}
          style={{width: 150, height: 150}}
        />
      </View>
      <View style={{marginLeft: 43, marginTop: 10}}>
        <Text style={{fontSize: 24, color: 'black', fontWeight: '800'}}>
          {item.name}
        </Text>
        <Text>{item.price}</Text>
        <Text style={{marginBottom: 20}}>{item.color}</Text>
        {!exitData ? (
          <Button
            title="Add to Cart "
            style={{marginTop: 10}}
            onPress={() => {
              handleAddToCart(item);
            }}
          />
        ) : (
          <Button
            title="Remove to Cart "
            style={{marginTop: 10}}
            onPress={() => {
              hnadleRemoveToCart(item);
            }}
          />
        )}
      </View>
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({});
