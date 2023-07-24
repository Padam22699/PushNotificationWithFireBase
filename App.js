import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FBlogin from './Src/SocialLogin/FBlogin';
import GoogleLogin from './Src/SocialLogin/GoogleLogin';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <FBlogin />
      {/* <GoogleLogin/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
