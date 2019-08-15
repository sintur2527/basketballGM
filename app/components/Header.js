import React from 'react';
import { Header } from 'react-native-elements';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '$white',
  },
});

const NavBar = () => {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#FFFFFF' }}
      centerComponent={{
        text: 'My Team',
        style: styles.title,
      }}
    />
  );
};

export default NavBar;
