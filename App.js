import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Cadastro from "./src/cadastro";
import Login from "./src/Login";
import Profile from "./src/Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen name="Home"
          component={Home} />
        <Stack.Screen name="Cadastro"
          component={Cadastro} />
        <Stack.Screen name="Login"
          component={Login} />
          <Stack.Screen name="Profile"
          component={Profile} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}
