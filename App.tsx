/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Keyboard, View, TouchableWithoutFeedback} from 'react-native';

import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import {store} from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import {theme} from './src/constants/theme';
import {SafeAreaView} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            accessible={false}>
            <AppNavigator />
          </TouchableWithoutFeedback>
        </PaperProvider>
      </ReduxProvider>
    </SafeAreaView>
  );
}
export default App;
