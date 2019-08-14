import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryGray: 'gray',
  $primaryColor: '#3053FF',
  $secondaryColor: '#FFC617',

  $white: '#FFFFFF',
  // $outline: 1,
});

export default () => <Home />;
