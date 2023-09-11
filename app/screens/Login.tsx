//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, StatusBar, Alert } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { NavigationProp } from '@react-navigation/native';
import { RouterProps } from './RouterProps';
const Stack = createNativeStackNavigator();
// create a component





const Login = ({navigation}:RouterProps ) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  //login 
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

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            {" "}
            Log In
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "gray",
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                color: "#839D8E",
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

// const style = StyleSheet.create({
//   container:{
//     marginHorizontal:20,
//     flex:1,
//     justifyContent:'center',
//   },
//   input:{
//     marginVertical:4,
//     height:50,
//     borderWidth:1,
//     borderRadius:4,
//     padding:10,
//     backgroundColor:'#fff'
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEEADA",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#839D8E",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#839D8E',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});



//make this component available to the app
export default Login;
