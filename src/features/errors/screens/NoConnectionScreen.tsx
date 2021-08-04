/* eslint-disable react-native/no-inline-styles */

import { INVALIDֹֹ_CONNECTIONֹֹ_TEXT1_COLOR } from '../../../constants/colors';
import { INVALIDֹֹ_CONNECTIONֹֹ_TEXT2_COLOR } from '../../../constants/colors';

import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
const NoConnection: React.FC = () => {
  return (
    <View style={styles.containerLogo}>
      <View
        style={{
          flex: 1.1,
          justifyContent: 'center',
        }}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/icons/noConnection.png')}
        />
      </View>
      <View style={{ flex: 0.1 }}>
        <Text style={styles.invalidName}>תקלה בתקשורת </Text>
      </View>
      <View
        style={{
          flex: 0.8,

          justifyContent: 'flex-start',
        }}>
        <Text style={styles.invalidName2}> נסה שוב מאוחר יותר </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 132,
    height: 38,
    marginTop: 220,
  },
  invalidName: {
    width: 218,
    height: 23,

    fontSize: 23,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: INVALIDֹֹ_CONNECTIONֹֹ_TEXT1_COLOR,
  },
  invalidName2: {
    width: 188,
    height: 18,

    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: INVALIDֹֹ_CONNECTIONֹֹ_TEXT2_COLOR,
  },
});
export default NoConnection;
