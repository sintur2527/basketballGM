import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    '@media ios': {
      paddingTop: 20,
    },
    backgroundColor: '$primaryColor',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 5,
    color: '$white',
  },
});
