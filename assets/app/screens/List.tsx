//import liraries
import { NavigationProp } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

interface RouterProps{
  navigation: NavigationProp<any,any>;
}

// create a component
const List = ({navigation}:RouterProps) => {
  return (
    <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>
      <Button title='Open Details' onPress={()=> navigation.navigate('details')}/>
      <Button title='Logout' onPress={()=> FIREBASE_AUTH.signOut()}/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default List;
