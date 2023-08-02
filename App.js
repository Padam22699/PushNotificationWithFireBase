import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FBlogin from './Src/SocialLogin/FBlogin';
import GoogleLogin from './Src/SocialLogin/GoogleLogin';
import Home from './Src/Redux/Screen/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from './Src/Redux/Componet/Product';
import Header from './Src/Redux/Componet/Header';
import UserList from './Src/Redux/Screen/UserList';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="UserList" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
