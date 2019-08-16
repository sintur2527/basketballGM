import React from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import NavBar from '../components/Header';
import Team from '../components/Team';
import RosterButton from '../components/RosterButton';
import StatsButton from '../components/StatsButton';
import ScheduleButton from '../components/ScheduleButton';
import FinanceButton from '../components/FinanceButton';

import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  recordContainer: {
    width: imageWidth,
    alignItems: 'center',
    backgroundColor: '#002147',
  },
  record: {
    color: '$white',
    fontWeight: '600',
    paddingBottom: 10,
  },
});

const TeamDetails = props => {
  const handleRosterPress = () => {
    const { navigation } = props;
    navigation.navigate('Roster');
  };
  const handleStatsPress = () => {
    const { navigation } = props;
    navigation.navigate('Stats');
  };
  const handleSchedulePress = () => {
    const { navigation } = props;
    navigation.navigate('Schedule');
  };
  const handleFinancesPress = () => {
    const { navigation } = props;
    navigation.navigate('Finances');
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} barStyle="light-content" />
      <NavBar />
      <Team />
      <View style={styles.recordContainer}>
        <Text h2 style={styles.record}>
          0 - 0
        </Text>
      </View>
      <View style={styles.buttons}>
        <RosterButton onPress={handleRosterPress} />
        <StatsButton onPress={handleStatsPress} />
        <ScheduleButton onPress={handleSchedulePress} />
        <FinanceButton onPress={handleFinancesPress} />
      </View>
    </View>
  );
};

export default TeamDetails;
