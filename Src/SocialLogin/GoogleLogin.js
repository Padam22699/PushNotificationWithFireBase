import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '67031875593-sp5kqfpba7gh4mjaprt5scq06tb82hik.apps.googleusercontent.com',
      androidClientId:
        '67031875593-cgpi6s7pi7v6sl6ti7vbeqd153k05lmc.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
    });
  }, []);
  signIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          signIn(); // Corrected function call to signIn()
        }}
        style={{
          backgroundColor: 'grey',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <Text>Google signin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({});
