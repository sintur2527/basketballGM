import React from 'react';
import { Dimensions } from 'react-native';
import { Layout, Button } from 'react-native-ui-kitten';

import EStyleSheet from 'react-native-extended-stylesheet';

const buttonWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
  },
  button: {
    width: buttonWidth,
  },
});

const handlePress = () => {
  console.log('press Roster');
};

const RosterButton = props => {
  return (
    <Layout style={styles.container}>
      <Button style={styles.button}>Roster</Button>
    </Layout>
  );
};

export default RosterButton;
