import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

import EStyleSheet from 'react-native-extended-stylesheet';

import { western } from '../images/teamLogos/logos';

const imageWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: imageWidth,
    height: imageWidth / 2,
  },
  placeholder: {
    backgroundColor: '$white',
  },
});

const WesternSelector = props => {
  const handleTeamPress = () => {
    const { navigation } = props;
    navigation.navigate('Details');
  };

  const westernLogos = Object.values(western);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleTeamPress}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={item}
            PlaceholderContent={<ActivityIndicator size="large" />}
            placeholderStyle={styles.placeholder}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Carousel
      ref={c => {
        this._carousel = c;
      }}
      data={westernLogos}
      renderItem={renderItem}
      layout={'default'}
      sliderWidth={imageWidth}
      itemWidth={imageWidth}
      enableMomentum={true}
    />
  );
};

export default WesternSelector;
