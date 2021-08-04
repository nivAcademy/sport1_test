import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sport1Icon from '../../../assets/icons/Sport1Icon';
import NewUserIcon from '../../../assets/icons/NewUserIcon';

import { FNColors } from '../../constants/index';
const HeaderNav = () => {
  return (
    <SafeAreaView style={styles.navTop}>
      <View style={styles.newUserStyle}>
        <NewUserIcon />
      </View>
      <View style={styles.sport1Style}>
        <Sport1Icon />
      </View>
      <View style={styles.newUserStyle} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  navTop: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: FNColors.NAV_COLOR,
  },
  newUserStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sport1Style: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HeaderNav;
