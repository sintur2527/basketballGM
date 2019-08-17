import React from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { Image, Text } from 'react-native-elements';

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
    fontWeight: '600',
    paddingBottom: 10,
    paddingTop: 10,
  },
  placeholder: {
    backgroundColor: '#002147',
  },
});

const Team = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'http://content.sportslogos.net/logos/6/223/full/8058_detroit_pistons-primary_on_dark-2018.png',
        }}
        PlaceholderContent={<ActivityIndicator size="large" color="#FFFFFF" />}
        placeholderStyle={styles.placeholder}
      />
      <View style={styles.textContainer}>
        <Text h4 style={styles.text}>
          Detroit Pistons
        </Text>
      </View>
    </View>
  );
};

export default Team;
