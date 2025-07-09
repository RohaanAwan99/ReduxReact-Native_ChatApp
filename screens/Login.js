import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../components/redux/action';

const { width } = Dimensions.get('screen');

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    const foundUser = users.find(user => user.name === username.trim());
    if (foundUser) {
      dispatch(SetUser(foundUser));
      navigation.navigate('MasterScreen');
    } else {
      alert('User not found. Please sign up first.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8e44ad',
  },
  input: {
    width: width * 0.8, padding: 12, backgroundColor: '#fff', borderRadius: 10, marginBottom: 20,
  },
  button: {
    backgroundColor: '#000', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8,
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold',
  },
});