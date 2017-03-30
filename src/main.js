/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import App from './view/app'

export default class Main extends Component {
    static navigationOptions = {
    	title: 'Welcome',
  	};
  	render() {
    	return (
          <App/>
    	);
    }
}

const styles = StyleSheet.create({

});