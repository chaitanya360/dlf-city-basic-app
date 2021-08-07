import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/Atoms/TabBar';
import constants from '../Constants/HomeScreen';
import {Text, View} from 'react-native';
import Header from '../components/Atoms/Header';
import VirtualTour from '../components/Molecules/VirtualTour';
import IsoView from '../components/Molecules/IsoView';
import Elevation from '../components/Molecules/Elevation';
import OnSite from '../components/Molecules/OnSite';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation(props) {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} key={props.state.key} />}
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name={constants.virtual_btn_text} component={VirtualTour} />
      <Tab.Screen name={constants.iso_btn_text} component={IsoView} />
      <Tab.Screen name={constants.elevation_btn_text} component={Elevation} />
      <Tab.Screen name={constants.on_site_btn_text} component={OnSite} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
