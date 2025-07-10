import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutCurrentUser, SetUser } from '../components/redux/action';

const { width, height } = Dimensions.get('screen');

export const LogoutButton = ({handleLogout}) => {
  return (
    <View style = {{position: 'absolute', bottom: 10, right: 10,}}>
      <Pressable style = {{backgroundColor: '#000', height: 30, width: 90, alignItems: 'center', justifyContent: 'center',borderRadius: 8,}} onPress = {() => handleLogout()}>
        <Text style = {{color: '#fff', fontSize: 16, fontWeight: 'bold',}}>Logout</Text>
      </Pressable>
    </View>
  );
}

const MasterScreen = ({ navigation }) => {
  const users = useSelector(state => state.users);
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const handleSelectUser = (user) => {
    if (!currentUser || user.id !== currentUser.id) {
      navigation.navigate('ChatScreen', { user });
    }
  };

  const handleLogout = () => {
    dispatch(LogoutCurrentUser());
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Available Users</Text>
      </View>
      <Text style={styles.header}>    Logged in as {<Text style = {{color: '#ffc400'}}>{currentUser.name}</Text>}{"\n"}Select a user to get started</Text>
      <View style={styles.innerContainer}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleSelectUser(item)} style={styles.userBox}>
              <Text style={styles.user}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
      <LogoutButton handleLogout={handleLogout} />
    </View>
  );
};

export default MasterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
  },
  headerBox: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    backgroundColor: '#000',
    height: height * 0.075,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  innerContainer: {
    gap: 10,
    backgroundColor: '#fff',
    height: height * 0.5,
    width: width * 0.85,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  userBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.06,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 6,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});