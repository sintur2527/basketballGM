import React from 'react';
import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-elements';

import EStyleSheet from 'react-native-extended-stylesheet';

const buttonWidth = Dimensions.get('window').width / 3;

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

const ScheduleButton = props => {
  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Schedule" onPress={props.onPress} />
    </View>
  );
};

export default ScheduleButton;
