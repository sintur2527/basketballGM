import React from 'react';
import { View, StatusBar, Text } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Team } from '../components/Team';

const Home = () => {
  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header />
      <Team />
    </Container>
  );
};

export default Home;
