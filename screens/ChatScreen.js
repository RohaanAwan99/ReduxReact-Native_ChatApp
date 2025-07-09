import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AddMessage } from '../components/redux/action';

const { width, height } = Dimensions.get('screen');

const ChatScreen = ({ route }) => {
  const selectedUser = route.params.user;
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chats);
  const [input, setInput] = useState('');
  const chatId = [currentUser.id, selectedUser.id].sort().join('_');
  const messages = chats[chatId] || [];

  const sendMessage = () => {
    if (input.trim()) {
      dispatch(AddMessage(chatId, input.trim(), currentUser.id));
      setInput('');
    }
  };

  const renderMessage = ({ item }) => {
    const isMine = item.senderId === currentUser.id;
    return (
      <View style={[styles.message, isMine ? styles.myMessage : styles.theirMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{currentUser.name} to {selectedUser.name}</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messageList}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />
        <Pressable style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    backgroundColor: '#fdf8ff',
  },
  header: {
    height: height * 0.09,
    width,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  message: {
    padding: 10,
    marginVertical: 4,
    borderRadius: 8,
    maxWidth: width * 0.7,
  },
  myMessage: {
    backgroundColor: '#d1e7dd',
    alignSelf: 'flex-end',
  },
  theirMessage: {
    backgroundColor: '#f8d7da',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputBox: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#8e44ad',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});