import React from 'react';
import { View, StatusBar } from 'react-native';

import NavBar from '../components/Header';
import Team from '../components/Team';
import RosterButton from '../components/RosterButton';
import StatsButton from '../components/StatsButton';
import ScheduleButton from '../components/ScheduleButton';
import FinanceButton from '../components/FinanceButton';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
});

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} barStyle="light-content" />
      <NavBar />
      <Team />
      <View style={styles.buttons}>
        <RosterButton />
        <StatsButton />
        <ScheduleButton />
        <FinanceButton />
      </View>
    </View>
  );
};

export default Home;
