import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { SetUser } from '../components/redux/action';

const { width, height } = Dimensions.get('screen');

const StartScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleEnter = () => {
		const defaultUser = { id: '4', name: 'Rohaan9' };
		dispatch(SetUser(defaultUser));
		navigation.navigate('MasterScreen');
	};

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Signup')} style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={handleEnter} style={styles.button}>
            <Text style={styles.buttonText}>
              Master Control
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: '#8e44ad',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: width / 10,
  },
  button: {
    width: (width / 8) * 3,
    height: width / 8,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width / 24,
    borderWidth: 1,
    borderColor: '#820b9',
    borderStyle: 'solid',
  },
  buttonText: {
    color: '#8200b9',
    fontWeight: 'bold',
    fontSize: width / 20,
  }
});