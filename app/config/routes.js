import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Selection from '../screens/Selection';
import EasternSelector from '../screens/EasternSelector';
import WesternSelector from '../screens/WesternSelector';
import TeamDetails from '../screens/TeamDetails';
import Roster from '../screens/Roster';
import Stats from '../screens/Stats';
import Schedule from '../screens/Schedule';
import Finances from '../screens/Finances';
import BoxScore from '../screens/BoxScore';

const SelectorStack = createStackNavigator(
  {
    Selection: {
      screen: Selection,
      navigationOptions: () => ({
        headerTitle: 'Choose a Conference',
      }),
    },
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

const DetailsStack = createStackNavigator(
  {
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
        headerTitle: 'Team Payroll',
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
      screen: DetailsStack,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  }
);

export default createAppContainer(AppNavigator);
