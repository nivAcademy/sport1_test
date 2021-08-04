/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useState } from 'react';
import OpenCategoryIcon from '../../../../assets/icons/OpenCategoryIcon';
//colors
import { FNColors } from '../../../constants/index';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const SubItem = ({ data }) => {
  const [isOpen, setOpenState] = useState(false);
  if (data.is_parent_category) {
    return (
      <View>
        <Collapse isExpanded={isOpen} onToggle={() => setOpenState(!isOpen)}>
          <CollapseHeader
            style={{
              flexDirection: 'row',
              backgroundColor: '#ffffff',
            }}>
            <View
              style={{
                justifyContent: 'center',
                transform: isOpen
                  ? [{ rotate: '180deg' }]
                  : [{ rotate: '0deg' }],
              }}>
              <OpenCategoryIcon />
            </View>
            <View style={styles.itemStyle}>
              <Text style={styles.textStyle}> {data.title}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <FlatList
              data={data.children}
              renderItem={({ item }) => <SubItem data={item} />}
              keyExtractor={item => item.id.toString()}
            />
          </CollapseBody>
        </Collapse>
      </View>
    );
  } else {
    return (
      <View
        style={
          data.children === undefined
            ? styles.subItemStyle
            : styles.noParentItem
        }>
        <View>
          <Text style={styles.subTextStyle}> {data.title}</Text>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: FNColors.WHITE,
    height: 40,
    marginBottom: 1,
  },
  textStyle: {
    fontSize: 20,
    marginTop: 5,
  },
  subTextStyle: {
    fontSize: 20,
    marginTop: 10,
  },
  noParentItem: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 1,
    backgroundColor: FNColors.WHITE,
  },
  subItemStyle: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 1,
    backgroundColor: FNColors.LIGHT_GRAY,
  },
  iconStyle: {
    marginLeft: 15,
    marginTop: 15,
    backgroundColor: FNColors.WHITE,
  },
  borderStyle: {
    borderBottomColor: FNColors.GRAY,
    borderBottomWidth: 1,
  },
});
export default SubItem;
