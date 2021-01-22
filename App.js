import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import AddTransaction from './src/AddTransaction';
import subTransaction from './src/subTransaction';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Text} from 'react-native';
import SplashScreen from './src/Parts/SplashScreen';

//redux
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/index';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<SplashScreen />}
        persistor={persistor}
        onBeforeLift={() =>
          new Promise((resolve) => setTimeout(resolve, 1000))
        }>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Money Track',
                headerStyle: {
                  backgroundColor: '#3B3B98',
                },
                headerTitleStyle: {
                  fontFamily: 'Lato-Regular',
                  color: '#fff',
                  alignSelf: 'center',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Add"
              component={AddTransaction}
              options={{
                title: 'Add Income',
                headerStyle: {
                  backgroundColor: '#3B3B98',
                },
                headerTitleStyle: {
                  fontFamily: 'Lato-Regular',
                  color: '#fff',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="sub"
              component={subTransaction}
              options={{
                title: 'Add Expense',
                headerStyle: {
                  backgroundColor: '#3B3B98',
                },
                headerTitleStyle: {
                  fontFamily: 'Lato-Regular',
                  color: '#fff',
                },
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
export default App;
