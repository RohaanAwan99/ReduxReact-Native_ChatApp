import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import MasterScreen from './screens/MasterScreen';
import {store} from './components/redux/store';
import { Provider } from 'react-redux';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StartScreen">
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="MasterScreen" component={MasterScreen} />
          <Stack.Screen name = "ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});