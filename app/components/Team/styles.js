import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
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
