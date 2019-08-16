import React from 'react';
import { View, StatusBar, ScrollView, FlatList } from 'react-native';
import { Text, Divider, Avatar } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import games from '../config/games';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  text: {
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: '#0046ae',
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  titleWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#002147',
  },
  date: {
    color: '#7A8385',
    fontSize: 14,
    fontWeight: '600',
  },
  location: {
    color: '#7A8385',
    fontSize: 12,
  },
});

const keyExtractor = (item, index) => index.toString();

const renderSchedule = ({ item }) => {
  return (
    <View>
      <View style={styles.itemWrapper}>
        <Avatar
          title={item.team[0]}
          size="medium"
          source={{ uri: item.logo }}
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.team}</Text>
          <Text style={styles.date}>
            {moment(item.date).format('dddd, MMM Do')}
          </Text>
          <Text style={styles.location}>{item.city}</Text>
        </View>
        <Text style={styles.title}>{`${item.time} ET`}</Text>
      </View>
      <Divider />
    </View>
  );
};

const markedDates = () => {
  let dates = {};
  games.map(
    (game, i) => (dates[game.date] = { marked: true, dotColor: '#0046ae' })
  );
  dates[games[0].date] = {
    selected: true,
    marked: true,
    selectedColor: '#0046ae',
  };
  return dates;
};

const Schedule = () => {
  return (
    <ScrollView>
      <StatusBar barStyle="default" />
      <Calendar
        current={'2019-10-23'}
        markedDates={markedDates()}
        theme={{
          arrowColor: '#0046ae',
          monthTextColor: '#0046ae',
          textMonthFontWeight: '600',
        }}
      />
      <Divider />
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
