import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Table, Row } from 'react-native-table-component';

import { pistons } from '../config/stats';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '600',
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
    fontSize: 18,
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

const Stats = () => {
  const tableHead = [
    'Split',
    'Games',
    'PTS',
    'FG%',
    '3P%',
    'FT%',
    'OREB',
    'DREB',
    'REB',
    'AST',
    'STL',
    'TO',
    'PF',
  ];

  const widthArr = [200, 80, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];

  const rowData = pistons.map(split => {
    return [
      split.split,
      split.games,
      split.points,
      split.fg,
      split.three,
      split.ft,
      split.oreb,
      split.dreb,
      split.reb,
      split.ast,
      split.stl,
      split.to,
      split.pf,
    ];
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.heading}>2018-2019 Team Statistics</Text>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#FFF' }}>
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
                  style={[styles.row, i % 2 && { backgroundColor: '#EBFCFF' }]}
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

export default Stats;
