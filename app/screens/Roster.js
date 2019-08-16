import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text, ScrollView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row } from 'react-native-table-component';

import { pistons } from '../config/roster';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  name: {
    fontWeight: '600',
  },
  position: {
    color: '#7A8385',
  },
});

const Roster = () => {
  const tableHead = [
    'Name',
    'Age',
    'Position',
    'MPG',
    'FG%',
    '3P%',
    'FT%',
    'RPG',
    'BPG',
    'APG',
    'PPG',
  ];

  const widthArr = [200, 60, 80, 60, 60, 60, 60, 60, 60, 60, 60];

  const rowData = pistons.map(player => {
    return [
      player.name,
      player.age,
      player.position,
      player.stats.mpg,
      player.stats.fg,
      player.stats.three,
      player.stats.ft,
      player.stats.rpg,
      player.stats.bpg,
      player.stats.apg,
      player.stats.ppg,
    ];
  });

  return (
    <View>
      <StatusBar barStyle="default" />
      <ScrollView horizontal={true}>
        <View>
          <Table>
            <Row data={tableHead} widthArr={widthArr} />
          </Table>
          <ScrollView>
            <Table>
              {rowData.map((row, i) => (
                <Row key={i} data={row} widthArr={widthArr} />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Roster;
