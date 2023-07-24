import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {
  getToken,
  notificationlistner,
  requestUserPermission,
} from '../Utils/notification';

const Notification = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    requestUserPermission();
    notificationlistner();
    getToken();
  });
  return (
    <View style={{flex: 1}}>
      <Text>hello</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
