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
    width: buttonWidth * 1.3,
    backgroundColor: '#0046ae',
  },
});

const FinanceButton = props => {
  return (
    <View style={styles.container}>
      <Button
        buttonStyle={styles.button}
        title="Contracts"
        onPress={props.onPress}
      />
    </View>
  );
};

export default FinanceButton;
