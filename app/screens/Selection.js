import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

const Selection = props => {
  const handleEasternPress = () => {
    const { navigation } = props;
    navigation.navigate('Eastern');
  };

  const handleWesternPress = () => {
    const { navigation } = props;
    navigation.navigate('Western');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleEasternPress}>
        <Text>Eastern Conference</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWesternPress}>
        <Text>Western Conference</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Selection;
