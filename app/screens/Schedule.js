import React from 'react';
import { View, StatusBar, ScrollView, FlatList } from 'react-native';
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

const keyExtractor = (item, index) => index.toString();

const renderSchedule = ({ item }) => {
  return (
    <ListItem
      title={item.team}
      leftAvatar={{ source: { uri: item.logo } }}
      subtitle={`${item.stadium}, ${item.city}`}
      bottomDivider={true}
    />
  );
};

const markedDates = () => {
  let dates = {};
  games.map((game, i) => (dates[game.date] = { marked: true }));
  return dates;
};

const Schedule = () => {
  return (
    <ScrollView>
      <StatusBar barStyle="default" />
      <Calendar current={'2019-10-23'} markedDates={markedDates()} />
      <Text h4 style={styles.text}>
        Upcoming Schedule
      </Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={games}
        renderItem={renderSchedule}
      />
    </ScrollView>
  );
};

export default Schedule;
