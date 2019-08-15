import React from 'react';
import { View, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({});

const Schedule = () => {
  return (
    <View>
      <StatusBar barStyle="default" />
      <Text>Calendar</Text>

      <Text>Upcoming Schedule</Text>
    </View>
  );
};

export default Schedule;
