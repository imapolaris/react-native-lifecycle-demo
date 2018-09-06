/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import lifecyclepage from "./src/lifecyclepage";

console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent(appName, () => lifecyclepage);
