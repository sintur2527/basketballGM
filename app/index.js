import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryGray: 'gray',
  $primaryColor: '#3053FF',
  $secondaryColor: '#FFC617',

  $white: '#FFFFFF',
  // $outline: 1,
});

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Layout style={{ flex: 1 }}>
      <Home />
    </Layout>
  </ApplicationProvider>
);

export default App;
