import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { mapping, light, dark } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { ThemeProvider } from 'react-native-elements';

import AppNavigator from './config/routes';

EStyleSheet.build({
  $primaryGray: 'gray',
  $primaryColor: '#3053FF',
  $secondaryColor: '#FFC617',

  $white: '#FFFFFF',
});

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
