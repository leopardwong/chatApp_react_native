//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, StatusBar, Alert } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { NavigationProp } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
// create a component


interface LoginProps {
  navigation: NavigationProp<any,any>;
}


const Login = ({navigation}:LoginProps ) => {
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

  //create account
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
  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    // <View style={style.container}>
    //   <KeyboardAvoidingView behavior='padding'>
    //     <TextInput value={email} style={style.input} placeholder="Email" autoCapitalize="none" onChangeText={(text)=>setEmail(text)}></TextInput>
    //     <TextInput secureTextEntry={true} value={password} style={style.input} placeholder="Password" autoCapitalize="none" onChangeText={(text)=>setPassword(text)}></TextInput>
    //     { loading? <ActivityIndicator size="large" color="#0000ff"/>
    //     :<>
    //       <Button title='Login' onPress={signIn}/>
    //       <Button title='Sign Up' onPress={signUp}/>
    //     </>}
    //   </KeyboardAvoidingView>
    // </View>
    <View style={styles.container}>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
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
                color: "#f57c00",
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
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "orange",
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
    backgroundColor: '#f57c00',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});



//make this component available to the app
export default Login;
