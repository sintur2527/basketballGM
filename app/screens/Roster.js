import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';

import { pistons } from '../config/roster';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  position: {
    color: '#7A8385',
  },
  headerStyle: {
    height: 50,
    backgroundColor: '$primaryColor',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    color: '$white',
  },
  row: {
    height: 40,
  },
  rowText: {
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10,
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

  const widthArr = [200, 60, 120, 60, 60, 60, 60, 60, 60, 60, 60];

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
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ScrollView horizontal={true}>
        <View>
          <Table
            borderStyle={{
              borderWidth: 1,
              borderColor: '#FFF',
            }}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={styles.headerStyle}
              textStyle={styles.headerText}
            />
          </Table>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#FFF' }}>
              {rowData.map((row, i) => (
                <Row
                  key={i}
                  data={row}
                  widthArr={widthArr}
                  style={styles.row}
                  textStyle={styles.rowText}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Roster;
