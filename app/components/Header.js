import React from 'react';
import {
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
} from 'react-native-ui-kitten';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    '@media ios': {
      paddingTop: 20,
    },
    backgroundColor: '$primaryColor',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 20,
  },
});

const Header = props => {
  return (
    <TopNavigation
      title="Team Page"
      titleStyle={styles.text}
      alignment="center"
    />
  );
};

export default Header;
