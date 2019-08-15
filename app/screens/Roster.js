import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({});

const Roster = () => {
  const [roster, setRoster] = useState({});

  useEffect(() => {});

  return (
    <View>
      <StatusBar barStyle="default" />
      <Text>This is the team Roster</Text>
    </View>
  );
};

export default Roster;
