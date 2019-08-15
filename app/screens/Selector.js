import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'react-native-elements';
import Swiper from 'react-native-swiper';

import EStyleSheet from 'react-native-extended-stylesheet';

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

const Selector = props => {
  const handleTeamPress = () => {
    const { navigation } = props;
    navigation.navigate('Details');
  };

  return (
    <Swiper showsButtons={true} showsPagination={false}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleTeamPress}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../images/detroit_pistons.png')}
            PlaceholderContent={<ActivityIndicator size="large" />}
            placeholderStyle={styles.placeholder}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleTeamPress}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../images/brooklyn-nets.png')}
            PlaceholderContent={<ActivityIndicator size="large" />}
            placeholderStyle={styles.placeholder}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleTeamPress}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../images/denver_nuggets.png')}
            PlaceholderContent={<ActivityIndicator size="large" />}
            placeholderStyle={styles.placeholder}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleTeamPress}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../images/sacramento_kings.png')}
            PlaceholderContent={<ActivityIndicator size="large" />}
            placeholderStyle={styles.placeholder}
          />
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default Selector;
