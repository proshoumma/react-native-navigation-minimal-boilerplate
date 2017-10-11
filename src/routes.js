import {Navigation} from 'react-native-navigation';

import Landing from './screens/Landing';
import Home from './screens/Home';

export function registerScreens() {
  Navigation.registerComponent('Landing', () => Landing);
  Navigation.registerComponent('Home', () => Home);
}
