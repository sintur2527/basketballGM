import React from 'react';
import { Image } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';

import styles from './styles';

const Team = () => {
  return (
    <Layout style={styles.container}>
      <Image
        style={styles.image}
        source={require('./images/pistons_primary_on_dark.png')}
      />
      <Layout style={styles.textContainer}>
        <Text style={styles.text}>Detroit Pistons</Text>
      </Layout>
    </Layout>
  );
};

export default Team;
