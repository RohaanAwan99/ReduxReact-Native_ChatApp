import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, TextInput, Dimensions} from 'react-native';
import { useDispatch } from 'react-redux';
import { AddUser } from '../components/redux/action';

const {width, height} = Dimensions.get('screen');

const Signup = ({navigation}) => {
    const dispatch = useDispatch();
    const [usernameinput, setusernameInput] = useState('');
    const handleSignUp =() => {
        if (usernameinput.trim()) {
            const user = { id: Date.now().toString(), name: usernameinput.trim() };
            dispatch(AddUser({ id: user.id, name: user.name }));
            navigation.navigate('Login');
        }
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.textinputcontainer}>
                <View style = {{alignItems: 'center'}}>
                    <Text style = {styles.text}>Signup</Text>
                </View>
                <TextInput style = {styles.textinput} 
                placeholder='Enter your username'
                value = {usernameinput}
                onChangeText={setusernameInput}/>
                <Pressable onPress={handleSignUp} style = {styles.button}>
                    <Text style = {{color: '#fff'}}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8e44ad',
    },
    textinputcontainer: {
        flexDirection: 'column',
        gap: 30,
    },
    textinput: {
        backgroundColor: '#ddd',
        width: width * 0.86,
        height: width * 0.86 * 0.15,
        borderRadius: 12,
        fontSize: 16,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
    }, 
    button: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height : width * 0.16,
        borderRadius: 12,
    }
});