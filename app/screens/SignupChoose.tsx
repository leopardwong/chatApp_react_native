import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RouterProps } from './RouterProps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const boxWidthPercentage = 80; // Adjust as needed
const boxHeightPercentage = 20; // Adjust as needed

const boxWidth = (windowWidth * boxWidthPercentage) / 100;
const boxHeight = (windowHeight * boxHeightPercentage) / 100;

const boxColor = '#839D8E'; // Set the color for both boxes


const SignupChoose = ({navigation}:RouterProps ) => {


  const handleBoxPress = () => {
    // Handle the box press here
    navigation.navigate("Signup");
  };

  const handleBackButtonPress = () => {
    // Handle the back button press here
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <TouchableOpacity onPress={handleBackButtonPress} style={styles.backButton}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Log In</Text>
        <TouchableOpacity onPress={handleBoxPress}>
         <View style={styles.box}>
            <Text style={styles.boxText}>Care Giver</Text>
         </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
         <View style={styles.box}>
            <Text style={styles.boxText}>Senior</Text>
         </View>
        </TouchableOpacity>
      </SafeAreaView>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEEADA",
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40, 
    left: 20, 
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
  box: {
    width: boxWidth,
    height: boxHeight,
    backgroundColor: boxColor,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  boxText: {
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
});


export default SignupChoose