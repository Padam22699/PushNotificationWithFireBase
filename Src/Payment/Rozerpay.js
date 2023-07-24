import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import React from 'react';

const Rozerpay = () => {
  let amont = 100;
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_FoqNBLOFgDTE9U', //API KEY FROM ROZER PAY ACCOUNT
            amount: amont * 100,
            name: 'Rozer Pay demo',
            order_id: '', //Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar',
            },
            theme: {color: 'orange'},
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
              console.log(data);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}
        style={{
          backgroundColor: 'orange',
          width: '90%',
          height: 40,
          position: 'absolute',
          bottom: 5,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
          borderRadius: 10,
        }}>
        <Text>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Rozerpay;

const styles = StyleSheet.create({});
