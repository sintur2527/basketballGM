# [Minimum Viable Product] - Basketball GM
## Timespan: 48 hours

> **Disclaimer** 
> 
> All images are property of the National Basketball Association (NBA). This project is strictly for personal use and not meant to be monetized. No copyright infringement intended. 

## Technologies Used

<img src="./documentation/ReactNative.png" alt="react-native" width="300"/>

## Table of Contents

1. [Description](#description)
2. [Screens](#screens)
3. [Building and Running](#building-and-running)
4. [Timelog](#timelog)

### Description

> Basketball GM is meant to be an application where YOU are the general manager of a professional basketball team, controlling its day to day logistics and overseeing its success. 
> 
> This project represents a "minimum viable product" created within the span of 48 hours. The total time spent on this project was 22 hours and 39 mins. 
> 
> **Current functionality of the application:** 
> - View all teams by conference
> - View a single team's roster, schedule (10 games), past season statistics, and player contracts
> - Simulate one game at a time, up to 10 upcoming games
> 
> **Planned/Upcoming Features:**
> - Select a franchise from over 30 unique teams
> - Trade and draft players across multiple 
> - Sign up/ Sign in to save your league
> - Simulate games more accurately based on the team and player stats
> - Improve player stats with training programs
> - And more...
> 
> **Technology:**
> - Created entirely using React Native and React Native Elements
> - Designed with React Native Extended Stylesheet
> - Built using XCode to built-in iOS simulator

### Screens

|                                    Home Screen                                    |                                      Team Selector                                      |
| :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| <img src="./documentation/basketballGM_open.gif" alt="home-screen" height="300"/> | <img src="./documentation/basketballGM_selector.gif" alt="team-selector" height="300"/> |

|                                     Team Details                                      |                                   Simulate / Next Game                                   |
| :-----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| <img src="./documentation/basketballGM_details.png" alt="team-details" height="300"/> | <img src="./documentation/basketballGM_simulation.gif" alt="team-details" height="300"/> |

|                                        Roster                                        |                                          Stats                                          |
| :----------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| <img src="./documentation/basketballGM_roster.gif" alt="team-details" height="300"/> | <img src="./documentation/basketballGM_teamStats.gif" alt="team-details" height="300"/> |

|                                        Schedule                                        |                                        Contracts                                        |
| :------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| <img src="./documentation/basketballGM_schedule.gif" alt="team-details" height="300"/> | <img src="./documentation/basketballGM_contracts.gif" alt="team-details" height="300"/> |


### Building and Running

Fork and clone the repository

```sh
git clone https://github.com/sintur2527/basketballGM.git
cd basketballGM
```
Install node dependencies
```sh
npm install
```
Install
[React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html)
```sh
npm i -g react-native-cli
```

#### Make sure to have Xcode or Android Studio installed
##### For ios

```sh
react-native run-ios
```
##### For android
```sh
react-native run-android
```

### Timelog

#### Logged with [WakaTime](https://wakatime.com)
 
<img src="./documentation/mvp_wakatime.png" alt="time" width="300" />