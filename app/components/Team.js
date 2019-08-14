import React from 'react';
import { Dimensions, Image } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';

import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: imageWidth,
    height: imageWidth / 1.7,
  },
  textContainer: {
    width: imageWidth,
    alignItems: 'center',
    backgroundColor: '#002147',
  },
  text: {
    color: '$white',
    fontSize: 24,
    fontWeight: '600',
  },
});

const Team = () => {
  return (
    <Layout style={styles.container}>
      <Image
        style={styles.image}
        source={require('../images/pistons_primary_on_dark.png')}
      />
      <Layout style={styles.textContainer}>
        <Text style={styles.text}>Detroit Pistons</Text>
      </Layout>
    </Layout>
  );
};

export default Team;
