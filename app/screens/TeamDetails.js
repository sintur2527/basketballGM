import React, { useState } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { Text, Button, Avatar, Divider } from 'react-native-elements';
import moment from 'moment';

import NavBar from '../components/Header';
import Team from '../components/Team';
import RosterButton from '../components/RosterButton';
import StatsButton from '../components/StatsButton';
import ScheduleButton from '../components/ScheduleButton';
import FinanceButton from '../components/FinanceButton';

import games from '../config/games';

import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  recordContainer: {
    width: imageWidth,
    alignItems: 'center',
    backgroundColor: '#002147',
  },
  record: {
    color: '$white',
    fontWeight: '600',
    paddingBottom: 10,
  },
  nextGame: {
    color: '#002147',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  titleWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#002147',
  },
  date: {
    color: '#7A8385',
    fontSize: 14,
    fontWeight: '600',
  },
  location: {
    color: '#7A8385',
    fontSize: 12,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: imageWidth * 0.9,
    backgroundColor: '#0046ae',
    marginBottom: 10,
  },
});

const TeamDetails = props => {
  const nextGames = games;
  // const nextTeam = nextGames[0];
  // State
  const [nextTeam, setNextTeam] = useState(nextGames[0]);

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);

  const [simButton, setSimButton] = useState(false);

  const handleRosterPress = () => {
    const { navigation } = props;
    navigation.navigate('Roster');
  };

  const handleStatsPress = () => {
    const { navigation } = props;
    navigation.navigate('Stats');
  };

  const handleSchedulePress = () => {
    const { navigation } = props;
    navigation.navigate('Schedule');
  };

  const handleFinancesPress = () => {
    const { navigation } = props;
    navigation.navigate('Finances');
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const handleSimulatePress = () => {
    let away = getRandomInt(90, 121);
    let home = getRandomInt(90, 121);

    if (away === home) {
      getRandomInt(0, 2) === 0 ? away + 10 : home + 10;
    }

    setAwayScore(away);
    setHomeScore(home);

    if (away > home) {
      setLosses(losses + 1);
    } else {
      setWins(wins + 1);
    }

    setSimButton(true);
  };

  const handleNextPress = () => {
    setSimButton(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} barStyle="light-content" />
      <NavBar />
      <Team />
      <View style={styles.recordContainer}>
        <Text h2 style={styles.record}>
          {`${wins} - ${losses}`}
        </Text>
      </View>
      <View style={styles.buttons}>
        <RosterButton onPress={handleRosterPress} />
        <StatsButton onPress={handleStatsPress} />
        <ScheduleButton onPress={handleSchedulePress} />
        <FinanceButton onPress={handleFinancesPress} />
      </View>
      <Divider />
      <Text style={styles.nextGame}>Next Game</Text>
      <View>
        <View style={styles.itemWrapper}>
          <Avatar size="medium" source={{ uri: nextTeam.logo }} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{nextTeam.team}</Text>
            <Text style={styles.date}>
              {moment(nextTeam.date).format('dddd, MMM Do')}
            </Text>
            <Text style={styles.location}>{nextTeam.city}</Text>
          </View>
          <Text style={styles.title}>{`${awayScore} - ${homeScore}`}</Text>
        </View>
      </View>
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        disabled={simButton}
        title="Simulate Game"
        onPress={() => handleSimulatePress()}
      />
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        title="Next Game"
        onPress={() => handleNextPress()}
      />
    </View>
  );
};

export default TeamDetails;
