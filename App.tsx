import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HeaderNav from './src/component/navigation/HeaderNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tab_navigationScreen from './src/screens/TabNavigationScreen';
import { Provider } from 'react-redux';
import store from './src/state/Store';
import splashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

//test
function App() {
  useEffect(() => {
    splashScreen.hide();
  });
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <HeaderNav />
          <Tab_navigationScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
