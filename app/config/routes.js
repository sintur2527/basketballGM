import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import EasternSelector from '../screens/EasternSelector';
import WesternSelector from '../screens/WesternSelector';
import TeamDetails from '../screens/TeamDetails';
import Roster from '../screens/Roster';
import Stats from '../screens/Stats';
import Schedule from '../screens/Schedule';
import Finances from '../screens/Finances';

const SelectorStack = createStackNavigator(
  {
    Eastern: {
      screen: EasternSelector,
      navigationOptions: () => ({
        headerTitle: 'Eastern Conference',
      }),
    },
    Western: {
      screen: WesternSelector,
      navigationOptions: () => ({
        headerTitle: 'Western Conference',
      }),
    },
  },
  {
    headerMode: 'screen',
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: SelectorStack,
      navigationOptions: {
        header: () => null,
      },
    },
    Details: {
      screen: TeamDetails,
      navigationOptions: {
        header: () => null,
      },
    },
    Roster: {
      screen: Roster,
      navigationOptions: () => ({
        headerTitle: 'Roster',
      }),
    },
    Stats: {
      screen: Stats,
      navigationOptions: () => ({
        headerTitle: 'Team Stats',
      }),
    },
    Schedule: {
      screen: Schedule,
      navigationOptions: () => ({
        headerTitle: 'Team Schedule',
      }),
    },
    Finances: {
      screen: Finances,
      navigationOptions: () => ({
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
