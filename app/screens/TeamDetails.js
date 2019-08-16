import React, { useState, Fragment } from 'react';
import {
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Text, Button, Avatar, Divider, Overlay } from 'react-native-elements';
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
  upcoming: {
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
    marginTop: 5,
    marginBottom: 5,
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
  titleWin: {
    color: '#4BB543',
  },
  titleLoss: {
    color: '#FC100D',
  },
  date: {
    color: '#7A8385',
    fontSize: 14,
    fontWeight: '600',
  },
  dateWin: {
    color: '#86C182',
  },
  dateLoss: {
    color: '#FD5B59',
  },
  location: {
    color: '#7A8385',
    fontSize: 12,
  },
  locationWin: {
    color: '#86C182',
  },
  locationLoss: {
    color: '#FD5B59',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: imageWidth * 0.9,
    backgroundColor: '#0046ae',
    marginBottom: 10,
  },
  overlay: {
    alignItems: 'center',
  },
  overlayStats: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  container: {
    alignItems: 'center',
  },
  overlayButton: {
    width: imageWidth / 2,
    backgroundColor: '#0046ae',
    marginBottom: 10,
  },
  overlayTitle: {
    color: '#002147',
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  overlayScore: {
    color: '#002147',
    fontSize: 48,
    fontWeight: '900',
  },
  overlayTeams: {
    color: '#7A8385',
    fontSize: 14,
    fontWeight: '600',
  },
  statsLabels: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
  },
  statsText: {
    fontWeight: '400',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

const TeamDetails = props => {
  const nextGames = games;

  // State
  const [nextTeam, setNextTeam] = useState(nextGames[0]);

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [win, setWin] = useState(0);

  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);

  const [awayFgm, setAwayFgm] = useState(0);
  const [awayFga, setAwayFga] = useState(0);
  const [awayReb, setAwayReb] = useState(0);
  const [awayAst, setAwayAst] = useState(0);
  const [awayStl, setAwayStl] = useState(0);
  const [awayBlk, setAwayBlk] = useState(0);

  const [homeFgm, setHomeFgm] = useState(0);
  const [homeFga, setHomeFga] = useState(0);

  const [homeReb, setHomeReb] = useState(0);
  const [homeAst, setHomeAst] = useState(0);
  const [homeStl, setHomeStl] = useState(0);
  const [homeBlk, setHomeBlk] = useState(0);

  const [simButton, setSimButton] = useState(false);
  const [nextButton, setNextButton] = useState(true);
  const [overlay, setOverlay] = useState(false);

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

  const handleScorePress = () => {
    setOverlay(true);
  };

  const handleBoxClose = () => {
    setOverlay(false);
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const simulateGame = () => {
    let away = getRandomInt(90, 121);
    let home = getRandomInt(90, 121);

    let awayRebound = getRandomInt(45, 61);
    let awayAssist = getRandomInt(20, 31);
    let awaySteal = getRandomInt(5, 15);
    let awayBlock = getRandomInt(2, 8);

    let homeRebound = getRandomInt(45, 61);
    let homeAssist = getRandomInt(20, 31);
    let homeSteal = getRandomInt(5, 15);
    let homeBlock = getRandomInt(2, 8);

    if (away === home) {
      getRandomInt(0, 2) === 0 ? away + 10 : home + 10;
    }

    setAwayScore(away);
    setHomeScore(home);

    setAwayReb(awayRebound);
    setAwayAst(awayAssist);
    setAwayStl(awaySteal);
    setAwayBlk(awayBlock);

    setHomeReb(homeRebound);
    setHomeAst(homeAssist);
    setHomeStl(homeSteal);
    setHomeBlk(homeBlock);

    if (away > home) {
      setLosses(losses + 1);
      setWin(-1);
    } else {
      setWins(wins + 1);
      setWin(1);
    }
  };

  const handleSimulatePress = () => {
    simulateGame();

    setSimButton(true);
    setNextButton(false);
  };

  const handleNextPress = () => {
    setSimButton(false);
    setAwayScore(0);
    setHomeScore(0);
    setWin(0);
    nextGames.shift();
    setNextTeam(nextGames[0]);
    setNextButton(true);
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
      <Text style={styles.upcoming}>Upcoming</Text>
      <TouchableOpacity onPress={handleScorePress}>
        <View style={styles.itemWrapper}>
          <Avatar size="medium" source={{ uri: nextTeam.logo }} />
          <View style={styles.titleWrapper}>
            <Text
              style={
                win > 0
                  ? [styles.title, styles.titleWin]
                  : win === 0
                  ? styles.title
                  : [styles.title, styles.titleLoss]
              }>
              {nextTeam.team}
            </Text>
            <Text
              style={
                win > 0
                  ? [styles.date, styles.dateWin]
                  : win === 0
                  ? styles.date
                  : [styles.date, styles.dateLoss]
              }>
              {moment(nextTeam.date).format('dddd, MMM Do')}
            </Text>
            <Text
              style={
                win > 0
                  ? [styles.location, styles.locationWin]
                  : win === 0
                  ? styles.location
                  : [styles.location, styles.locationLoss]
              }>
              {nextTeam.city}
            </Text>
          </View>
          <Text
            style={
              win > 0
                ? [styles.title, styles.titleWin]
                : win === 0
                ? styles.title
                : [styles.title, styles.titleLoss]
            }>{`${awayScore} - ${homeScore}`}</Text>
        </View>
      </TouchableOpacity>
      <Overlay isVisible={overlay} onBackdropPress={() => setOverlay(false)}>
        <View style={styles.overlay}>
          <Text style={styles.overlayTitle}>Final Stats</Text>
          <View style={styles.overlayStats}>
            <ScrollView
              contentContainerStyle={styles.container}
              scrollEnabled={false}>
              <Text style={styles.overlayScore}>{awayScore}</Text>
              <Text style={styles.overlayTeams}>
                {nextTeam.team.split(' ')[1]}
              </Text>
              <Text style={styles.statsText}>{`${awayFga} - ${awayFgm}`}</Text>
              <Text style={styles.statsText}>{awayReb}</Text>
              <Text style={styles.statsText}>{awayAst}</Text>
              <Text style={styles.statsText}>{awayStl}</Text>
              <Text style={styles.statsText}>{awayBlk}</Text>
            </ScrollView>
            <ScrollView
              contentContainerStyle={styles.container}
              scrollEnabled={false}>
              <Text style={styles.overlayScore}>{'-'}</Text>
              <Text style={styles.overlayTeams}>{'-'}</Text>
              <Text style={styles.statsLabels}>{`FGM - FGA`}</Text>
              <Text style={styles.statsLabels}>{'REB'}</Text>
              <Text style={styles.statsLabels}>{'AST'}</Text>
              <Text style={styles.statsLabels}>{'STL'}</Text>
              <Text style={styles.statsLabels}>{'BLK'}</Text>
            </ScrollView>
            <ScrollView
              contentContainerStyle={styles.container}
              scrollEnabled={false}>
              <Text style={styles.overlayScore}>{homeScore}</Text>
              <Text style={styles.overlayTeams}>{'Pistons'}</Text>
              <Text style={styles.statsText}>{`${homeFga} - ${homeFgm}`}</Text>
              <Text style={styles.statsText}>{homeReb}</Text>
              <Text style={styles.statsText}>{homeAst}</Text>
              <Text style={styles.statsText}>{homeStl}</Text>
              <Text style={styles.statsText}>{homeBlk}</Text>
            </ScrollView>
          </View>
        </View>
        <Button
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.overlayButton}
          title="Close"
          onPress={handleBoxClose}
        />
      </Overlay>
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
        disabled={nextButton}
        title="Next Game"
        onPress={() => handleNextPress()}
      />
    </View>
  );
};

export default TeamDetails;
