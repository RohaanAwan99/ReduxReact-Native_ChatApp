import React from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet,} from 'react-native';

const ChatScreen = ({route}) => {
    return (
        <View style = {styles.container}>
            <Text>Hello World</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    }
});

export default ChatScreen;