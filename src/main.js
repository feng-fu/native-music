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
    	title: ({ state }) => `主页`,
  	}
    constructor(props) {
      super(props)
    }
  	render() {
    	return (
          <App {...this.props}/>
    	);
    }
}

const styles = StyleSheet.create({

});