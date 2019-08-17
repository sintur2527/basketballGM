import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Image } from 'react-native-elements';

import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  placeholder: {
    backgroundColor: '$white',
  },
  image: {
    width: imageWidth,
    height: imageWidth / 2,
    marginTop: 15,
    marginBottom: 15,
  },
});

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
    <View style={styles.container}>
      <TouchableOpacity onPress={handleEasternPress}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri:
              'http://content.sportslogos.net/logos/6/999/full/9110__nba_eastern_conference-primary_on_dark-2018.png',
          }}
          PlaceholderContent={<ActivityIndicator />}
          placeholderStyle={styles.placeholder}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWesternPress}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri:
              'http://content.sportslogos.net/logos/6/1001/full/8135__nba_western_conference-primary_on_dark-2018.png',
          }}
          PlaceholderContent={<ActivityIndicator />}
          placeholderStyle={styles.placeholder}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Selection;
