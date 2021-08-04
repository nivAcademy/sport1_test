import * as React from 'react';

import {Path, Svg} from 'react-native-svg';
interface HomeIconProps {
  color?: string;
  width?: number;
  height?: number;
}
const HomeIcon = () => {
  return (
    <Svg
      width="23"
      height="15"
      viewBox="0 0 15 16"
      fill="#8B8B8B"
      fill-rule="nonzero">
      <Path
        d="M299.5 0L292 5.714 292 16 297.063 16 297.063 10.667 301.938 10.667 301.938 16 307 16 307 5.714z"
        transform="translate(-326 -1233) translate(0 1222) translate(34 11)"
      />
    </Svg>
  );
};
export default HomeIcon;
