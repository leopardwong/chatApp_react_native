//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const Stack = createNativeStackNavigator();
// create a component

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn =async () => {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth,email,password);
      console.log(response);
   
    }catch(error:any){
      console.log(error);
      alert('sign in fail: ' +error.message);
    }finally{
      setLoading(false);
    }
  }

  const signUp =async () => {
    setLoading(true);
    try{
      const response = await createUserWithEmailAndPassword(auth,email,password);
      console.log(response);
      alert('Check Your email')
    }catch(error:any){
      console.log(error);
      alert('registration fail: ' +error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <KeyboardAvoidingView behavior='padding'>
        <TextInput value={email} style={style.input} placeholder="Email" autoCapitalize="none" onChangeText={(text)=>setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} value={password} style={style.input} placeholder="Password" autoCapitalize="none" onChangeText={(text)=>setPassword(text)}></TextInput>
        { loading? <ActivityIndicator size="large" color="#0000ff"/>
        :<>
          <Button title='Login' onPress={signIn}/>
          <Button title='Sign Up' onPress={signUp}/>
        </>}
      </KeyboardAvoidingView>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    marginHorizontal:20,
    flex:1,
    justifyContent:'center',
  },
  input:{
    marginVertical:4,
    height:50,
    borderWidth:1,
    borderRadius:4,
    padding:10,
    backgroundColor:'#fff'
  }
})



//make this component available to the app
export default Login;
