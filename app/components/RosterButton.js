import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  Button,
  Dimensions,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const buttonWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$primaryColor',
    width: buttonWidth,
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});

const handlePress = () => {
  console.log('press Roster');
};

const RosterButton = () => {
  return (
    <View style={styles.container}>
      <Button onPress={handlePress} title="Roster" color="#FFF" />
    </View>
  );
};

export default RosterButton;
