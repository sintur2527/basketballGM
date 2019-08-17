import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ThemeProvider } from 'react-native-elements';

import AppNavigator from './config/routes';

EStyleSheet.build({
  $primaryGray: 'gray',
  $primaryColor: '#0046ae',
  $secondaryColor: '#FFC617',

  $white: '#FFFFFF',
});

const App = () => {
  console.disableYellowBox = true;
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
