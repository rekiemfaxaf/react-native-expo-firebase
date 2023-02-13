import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { app } from '../firebase';
import { getAuth } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import { styles } from '../styles/styles';

const HomeScreen = () => {
  const auth = getAuth(app);
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => navigation.replace('Login'))
      .catch(error => alert(error.message));
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Excercise') }}>
        <Text style={styles.buttonText}>My Excersices</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignOut()}>
        <Text style={styles.buttonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;