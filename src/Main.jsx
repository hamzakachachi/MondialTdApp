// src/App.js

import React from 'react';
// import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
// import { store } from './app/store';
import LoginScreen from './pages/LoginScreen';
import NavigationBar from './components/NavigationBar';
// import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
  
  const {isLoggedIn} = useSelector((state) => state.auth);
  return (<>{!isLoggedIn ? <LoginScreen /> : <NavigationBar/>}</>);
}
