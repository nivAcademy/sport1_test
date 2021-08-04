import { ViewStyle } from 'react-native';
import { FNColors } from '.';
//import { wp } from '../utils/responsiveUtil';

export const ICON_TOUCHABLE_AREA = 50;
export const BUTTON_TOUCHABLE_HEIGHT = 40;

//export const PADDING_HORIZONTAL_DEFAULT = wp('5.3%');

export const CENTERED: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};
export const SCREEN_CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: FNColors.BLACK,
  paddingTop: 10,
};

export const ROW_DIRECTION: ViewStyle = {
  flexDirection: 'row',
};

export const ALIGN_CENTER: ViewStyle = {
  alignItems: 'center',
};

export const WIDTH_100: ViewStyle = {
  width: '100%',
};

export const JUSTIFY_BETWEEN: ViewStyle = {
  justifyContent: 'space-between',
};
