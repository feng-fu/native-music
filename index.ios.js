/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';

import Router from './src/router'
const router = Router.Router
// import Router from './src/main'



AppRegistry.registerComponent('nativemusic', () => router);
