import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Roster from '../screens/Roster';
import Stats from '../screens/Stats';
import Schedule from '../screens/Schedule';
import Finances from '../screens/Finances';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Roster: {
      screen: Roster,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Roster',
      }),
    },
    Stats: {
      screen: Stats,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Team Stats',
      }),
    },
    Schedule: {
      screen: Schedule,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Team Schedule',
      }),
    },
    Finances: {
      screen: Finances,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Team Finances',
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  }
);

export default createAppContainer(AppNavigator);
