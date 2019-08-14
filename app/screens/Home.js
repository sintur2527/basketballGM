import React from 'react';
import { View, StatusBar } from 'react-native';
import { Layout } from 'react-native-ui-kitten';

import { Header } from '../components/Header';
import { Team } from '../components/Team';

import RosterButton from '../components/RosterButton';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = () => {
  return (
    <Layout>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header />
      <Team />
      <View style={styles.buttons}>
        <RosterButton />
      </View>
    </Layout>
  );
};

export default Home;
