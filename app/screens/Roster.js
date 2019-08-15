import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, StatusBar, Text } from 'react-native';
import { API_KEY } from '../config/keys';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({});

const Roster = () => {
  const [roster, setRoster] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios({
        url: `https://api-nba-v1.p.rapidapi.com/players/teamId/10`,
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
        },
      });
      setRoster(results.data.api.players);
    };
    fetchData();
  }, []);

  console.log(roster);

  return (
    <View>
      <StatusBar barStyle="default" />
      <Text>This is the team Roster</Text>
    </View>
  );
};

export default Roster;
