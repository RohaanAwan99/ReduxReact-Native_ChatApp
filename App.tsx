import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './components/redux/store';

import StartScreen from './screens/StartScreen';
import MasterScreen from './screens/MasterScreen';
import ChatScreen from './screens/ChatScreen';
// import Login from './screens/Login';
// import Signup from './screens/Signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StartScreen">
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="MasterScreen" component={MasterScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            {/* <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} /> */}
          </Stack.Navigator>
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