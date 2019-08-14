import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { mapping, light, dark } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
// import { theme } from './themes';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryGray: 'gray',
  $primaryColor: '#3053FF',
  $secondaryColor: '#FFC617',

  $white: '#FFFFFF',
});

const themes = { light, dark };

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ApplicationProvider mapping={mapping} theme={themes[theme]}>
      <Home toggleTheme={toggleTheme} />
    </ApplicationProvider>
  );
};

export default App;
