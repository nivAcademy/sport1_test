/* eslint-disable react-native/no-inline-styles */

//constant color
import { WHITE_COLOR } from '../../../constants/colors';
import { INVALIDֹֹ_CONNECTIONֹֹ_TEXT1_COLOR } from '../../../constants/colors';
import { INVALIDֹֹ_CONNECTIONֹֹ_TEXT2_COLOR } from '../../../constants/colors';
import { fetchCategoriesAction } from '../state/actions/MoreInfoActions';

//component
import SubItem from '../component/SubItemComponent';
import * as React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
} from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import { RootState } from '../../../state/Store';

const MoreInfoScreen: React.FC = () => {
  const categories = useSelector((state: RootState) => state.moreInfo.data);
  const loading = useSelector((state: RootState) => state.loader.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  if (loading) {
    return (
      <LottieView
        source={require('../../../../assets/icons/loaderAnimation.json')}
        autoPlay
        loop
      />
    );
  }

  if (categories.length > 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.flatListStyle}>
          <FlatList
            data={categories}
            renderItem={({ item }) => <SubItem data={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.containerLogo}>
        <View
          style={{
            flex: 0.6,
            justifyContent: 'center',
          }}>
          <Image
            style={styles.logo2}
            source={require('../../../../assets/icons/calendar.png')}
          />
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'flex-start',
          }}>
          <Text style={styles.invalidName}>אין קטגוריות לדף זה </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  flatListStyle: {
    marginTop: 50,
  },
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
  logo2: {
    width: 52,
    height: 52,
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
export default MoreInfoScreen;
