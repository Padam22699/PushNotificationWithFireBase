import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
const Header = ({navigation}) => {
  const cartData = useSelector(state => state.AddCartReducer);
  const [cartDtata, setCartDtata] = useState(0);
  useEffect(() => {
    setCartDtata(cartData.length);
  }, [cartData]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Image
          source={require('../../assest/image/c.png')}
          style={{
            width: 30,
            height: 30,
            marginRight: 2,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            marginRight: 20,
            color: 'black',
            fontWeight: '700',
          }}>
          {cartData.length}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
