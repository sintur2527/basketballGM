import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Team = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./images/pistons_primary_on_dark.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Detroit Pistons</Text>
      </View>
    </View>
  );
};

export default Team;
