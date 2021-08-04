//component
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
import NoConnection from '../features/errors/screens/NoConnectionScreen';

interface Props {
  Screen: React.FC;
}
//this screen handle all checks of errors
const TabHolderScreen: React.FC<Props> = ({ Screen }) => {
  const connected = useSelector((state: RootState) => state.error.isConnected);
  return connected ? <Screen /> : <NoConnection />;
};
export default TabHolderScreen;
