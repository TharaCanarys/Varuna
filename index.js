/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// Temp Disabled, Enable while Building Production
// if (__DEV__) {
//   console.log = () => {}; // Disable console logs in production
// }
