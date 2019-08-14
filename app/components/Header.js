import React from 'react';
import { View, Text } from 'react-native';

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
    fontSize: 28,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 5,
    color: '$white',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basketball GM</Text>
    </View>
  );
};

export default Header;
