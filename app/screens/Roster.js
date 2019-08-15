import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, StatusBar, Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { API_KEY } from '../config/keys';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({});

const Roster = () => {
  const [roster, setRoster] = useState();

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

  return (
    <ScrollView>
      <StatusBar barStyle="default" />
      {roster
        ? roster.map((player, i) =>
            player.leagues.standard &&
            player.leagues.standard.active === '1' ? (
              <ListItem
                key={i}
                title={`${player.firstName} ${player.lastName}`}
                subtitle={`${player.leagues.standard.pos}`}
                bottomDivider={true}
              />
            ) : null
          )
        : null}
    </ScrollView>
  );
};

export default Roster;
