import React from 'react';
import { View, StatusBar, Text } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({});

const Finances = () => {
  return (
    <View>
      <StatusBar barStyle="default" />
      <Text>This is the team Finances</Text>
    </View>
  );
};

export default Finances;
