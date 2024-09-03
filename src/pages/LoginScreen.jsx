// src/screens/LoginScreen.js

import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../app/features/auth/authSlice';

const LoginScreen = () => {
  // const { colors } = useTheme();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ email, password }));
    // navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{
            width: 150,
            height: 150,
            resizeMode: 'contain',
          }}
          source={require('../assets/favicon.png')} ></Image>
      </View>
      <Text style={styles.greeting}>Bonjour!</Text>
      <TextInput
        mode='outlined'
        label="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        mode='outlined'
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        right={<TextInput.Icon name="eye" />}
      />
      {auth.error && <Text style={styles.error}>{auth.error}</Text>}
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Se connecter
      </Button>
      <Text style={styles.forgotPassword}>Mot de passe oublié?</Text>
      <Text style={styles.signUpPrompt}>Tu as un identifiant de suivi ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
    width: "100%",
    height: 200,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#F8F9FE',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#006FFD',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#006FFD',
  },
  signUpPrompt: {
    marginTop: 10,
    color: '#006FFD',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
