import React from 'react';
import { View, StatusBar, Text } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({});

const Schedule = () => {
  return (
    <View>
      <StatusBar barStyle="default" />
      <Text>This is the team Schedule</Text>
    </View>
  );
};

export default Schedule;
