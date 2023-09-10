import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Setting = () => {
  return (
    <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>
      <Button title='Logout' onPress={()=> FIREBASE_AUTH.signOut()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Setting