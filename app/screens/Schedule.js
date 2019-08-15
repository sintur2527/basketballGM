import React from 'react';
import { View, StatusBar, ScrollView, FlatList } from 'react-native';
import { Text, ListItem, Divider, Avatar } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import games from '../config/games';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  text: {
    paddingTop: 15,
    fontWeight: '600',
    textAlign: 'center',
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
