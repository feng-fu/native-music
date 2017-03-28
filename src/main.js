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
// import HomePage from './view/index'
import Navbar from './view/navbar'

export default class Main extends Component {
  render() {
    return (
        <View>
            <Navbar/>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});