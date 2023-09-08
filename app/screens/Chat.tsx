import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';


interface RouterProps{
  navigation: NavigationProp<any,any>;
}

const Chat = ({navigation}:RouterProps) => {
  return (
    <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>
      <Button title='Open List' onPress={()=> navigation.navigate('Lists')}/>
      <Button title='Open Details' onPress={()=> navigation.navigate('details')}/>
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

export default Chat