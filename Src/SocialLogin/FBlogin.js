`import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LoginButton, AccessToken, Profile} from 'react-native-fbsdk-next';
const FBlogin = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      ; <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
            const currentProfile = Profile.getCurrentProfile().then(function (
              currentProfile,
            ) {
              if (currentProfile) {
                console.log(
                  'The current logged user is: ' +
                    currentProfile.name +
                    '. His profile id is: ' +
                    currentProfile.userID,
                );
              }
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
}; 

export default FBlogin;

const styles = StyleSheet.create({});
`