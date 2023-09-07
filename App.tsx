import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './assets/app/screens/Login';
import List from './assets/app/screens/List';
import Details from './assets/app/screens/Details';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(
    <InsideStack.Navigator>
      <Stack.Screen name='my todos' component={List} />
      <Stack.Screen name='details' component={Details} />
    </InsideStack.Navigator>
  )
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
      <Stack.Navigator initialRouteName='Login'>
        {user? (
          <Stack.Screen name="Inside" component={InsideLayout} options={{headerShown:false}}/>
        ):(
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        )}  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

