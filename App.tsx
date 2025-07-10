import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './components/redux/store';

import StartScreen from './screens/StartScreen';
import MasterScreen from './screens/MasterScreen';
import ChatScreen from './screens/ChatScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

const LoggedInFlow = () => {
  return (
    <Stack.Navigator initialRouteName='MasterScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MasterScreen" component={MasterScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

const StartFlow = () => {
  return (
    <Stack.Navigator initialRouteName='StartScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

const NavigationDecider =() => {
  const currentUser = useSelector(state => state.currentUser);
  return currentUser.id != '0' ? <LoggedInFlow />: <StartFlow />
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
            <NavigationDecider />
        </NavigationContainer>
      </PersistGate>
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