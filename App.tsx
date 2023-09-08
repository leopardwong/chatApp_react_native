import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Signup from './app/screens/Signup';
import Chat from './app/screens/Chat';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(
    <Stack.Navigator initialRouteName= "Lists">
      <Stack.Screen name='Lists' component={List} />
      <Stack.Screen name='details' component={Details} />
      <Stack.Screen name='Chat' component={Chat} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH,(user)=>{
      console.log('user',user);
      setUser(user);
    });
  },[])
  return (
    <NavigationContainer>
      {user ? <InsideLayout /> : <AuthStack />}
      {/* <Stack.Navigator initialRouteName='Login'>
        {user? (
          <Stack.Screen name="Inside" component={InsideLayout} options={{headerShown:false}}/>
        ):(
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          
        )}  
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

