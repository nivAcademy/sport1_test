import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>inside Home scree</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',

    justifyContent: 'center',
  },
});
export default HomeScreen;
