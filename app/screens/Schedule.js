import React from 'react';
import { View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';

import games from '../config/games';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  text: {
    paddingTop: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const renderSchedule = () => {
  return (
    <ScrollView nestedScrollEnabled={true}>
      {games.map((game, i) => (
        <ListItem
          key={i}
          title={game.team}
          leftAvatar={{ source: { uri: game.logo } }}
          subtitle={`${game.stadium}, ${game.city}`}
          bottomDivider={true}
        />
      ))}
    </ScrollView>
  );
};

const markedDates = () => {
  let dates = {};
  games.map((game, i) => (dates[game.date] = { marked: true }));
  return dates;
};

const Schedule = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <Calendar current={'2019-10-23'} markedDates={markedDates()} />
      <Text h4 style={styles.text}>
        Upcoming Schedule
      </Text>
      <View>{renderSchedule()}</View>
    </SafeAreaView>
  );
};

export default Schedule;
