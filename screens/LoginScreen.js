import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import { loginStyles } from '../styles/styles';

const LoginScreen = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const auth = getAuth(app);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('Home');
      } 
    })
    return unsubcribe;
  }, []);

  const handleSingUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with: ',user.email);
      })
      .catch(error => alert(error.message));
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with: ',user.email);
      })
      .catch(error => alert(error.message));
  }

  return (
    <KeyboardAvoidingView style={loginStyles.container} 
      behavior="padding">
      <View style={loginStyles.inputContainer}>
        <TextInput placeholder='Email' style={loginStyles.input} value={email}
          onChangeText={text => setEmail(text)}>
        </TextInput>
        <TextInput placeholder='Password' style={loginStyles.input}
          value={password} onChangeText={text => setPassword(text)}
          secureTextEntry
        ></TextInput>
      </View>
      <View style={loginStyles.buttonContainer}>
        <TouchableOpacity 
          onPress={handleLogin}
          style={loginStyles.button}
        >
          <Text 
            style={loginStyles.buttonText}>
              Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleSingUp}
          style={[loginStyles.button, loginStyles.buttonOutline]}
        >
          <Text 
            style={loginStyles.buttonOutlineText}
          >
              Register
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;
