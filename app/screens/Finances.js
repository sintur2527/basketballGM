import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Table, Row } from 'react-native-table-component';

import { pistons } from '../config/finances';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '600',
  },
  payroll: {
    color: 'red',
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

const Finances = () => {
  const tableHead = [
    'Name',
    '2019/20',
    '2020/21',
    '2021/22',
    '2022/23',
    '2023/24',
  ];

  const widthArr = [250, 150, 150, 150, 150, 150];

  const rowData = pistons.map(player => {
    return [
      player.name,
      player['2019'],
      player['2020'],
      player['2021'],
      player['2022'],
      player['2023'],
    ];
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.heading}>
        2019/20 Team Payroll: <Text style={styles.payroll}>$135,174,523</Text>
      </Text>
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

export default Finances;
