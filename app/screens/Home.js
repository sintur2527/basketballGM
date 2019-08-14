import React from 'react';
import { View, StatusBar, Text } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';

const Home = () => {
  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header />
    </Container>
  );
};

export default Home;
