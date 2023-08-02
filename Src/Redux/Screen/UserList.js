import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../Action/Action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.AddCartReducer);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      {/* Add other user details as needed */}
    </View>
  );

  if (!userList || userList.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No users found.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id ? item.id.toString() : ''}
      />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({});
