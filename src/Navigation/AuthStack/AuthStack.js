// AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // 👈 Use native stack
import SignUp from '../../Screens/Authentication/SignUp/SignUp';
import SignIn from '../../Screens/Authentication/SignIn/SignIn';
import WelcomeScreen from '../../Screens/Authentication/SignIn/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
