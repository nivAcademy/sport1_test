import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//constant
import { FNColors } from '../constants/index';

//icons
import HomeIcon from '../../assets/icons/HomeIcon';
import ResultsIcon from '../../assets/icons/ResultIcon';
import VodIcon from '../../assets/icons/VodIcon';
import TvBroadcastsIcon from '../../assets/icons/TvBroadcastIcon';
import MoreInfoIcon from '../../assets/icons/MoreInfoIcon';

//screens
import HomeScreen from '../features/main/screens/HomeScreen';
import ResultsScreen from '../features/results/screens/ResultsScreen';
import VodScreen from '../features/vod/screens/VodScreen';
import TvBroadcastsScreen from '../features/tv/screens/TvBroadcastsScreen';
import MoreInfoScreen from '../features/moreInfo/screens/MoreInfoScreen';

import TabHolderScreen from './TabHolderScreen';

const Tab = createBottomTabNavigator();
const Tab_navigationScreen = () => {
  return (
    <Tab.Navigator tabBarOptions={{ style: styles.navBottom }}>
      <Tab.Screen
        name="עוד "
        children={() => <TabHolderScreen Screen={MoreInfoScreen} />}
        //component={() => <TabHolderScreen Screen={MoreInfoScreen} />}
        options={{
          tabBarIcon: ({ foced }) => <MoreInfoIcon />,
        }}
      />
      <Tab.Screen
        name="שידורים"
        children={() => <TabHolderScreen Screen={TvBroadcastsScreen} />}
        //component={() => <TabHolderScreen Screen={TvBroadcastsScreen} />}
        options={{ tabBarIcon: ({ foced }) => <TvBroadcastsIcon /> }}
      />
      <Tab.Screen
        name="Vod"
        children={() => <TabHolderScreen Screen={VodScreen} />}
        // component={() => <TabHolderScreen Screen={VodScreen} />}
        options={{ tabBarIcon: ({ foced }) => <VodIcon /> }}
      />

      <Tab.Screen
        name="תוצאות"
        children={() => <TabHolderScreen Screen={ResultsScreen} />}
        //component={() => <TabHolderScreen Screen={ResultsScreen} />}
        options={{ tabBarIcon: ({ foced }) => <ResultsIcon /> }}
      />
      <Tab.Screen
        name="בית"
        children={() => <TabHolderScreen Screen={HomeScreen} />}
        //component={() => <TabHolderScreen Screen={HomeScreeen} />}
        options={{ tabBarIcon: ({ foced }) => <HomeIcon /> }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  navBottom: {
    width: 400, //was 375
    height: 80, //was 48
    backgroundColor: FNColors.NAV_COLOR,
  },
});
export default Tab_navigationScreen;
