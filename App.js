import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import {Root} from 'native-base';
console.disableYellowBox = true;

const App = () => (
  <Root>
    <AppNavigator />
  </Root>
);

export default App;
