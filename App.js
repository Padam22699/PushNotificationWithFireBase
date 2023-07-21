import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

import Notification from './Src/PushNotification/Notification';
import {
  getToken,
  notificationlistner,
  requestUserPermission,
} from './Src/Utils/notification';
import Videos from './Src/VideoPlayer/Video';

const App = () => {
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
      <Videos />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
