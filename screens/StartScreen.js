import React from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';

const {width, height} = Dimensions.get('screen');

const StartScreen =({navigation}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.innerContainer}>
                <View style = {styles.buttonContainer}>
                    <Pressable onPress={() => navigation.navigate('MasterScreen')} style = {styles.button}>
                        <Text style = {styles.buttonText}>Login</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('MasterScreen')} style = {styles.button}>
                        <Text style = {styles.buttonText}>Sign up</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => navigation.navigate('MasterScreen')} style = {styles.button}>
                        <Text style = {styles.buttonText}>
                            Master Control
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

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
})