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
import Navbar from './view/navbar'

export default class Main extends Component {
  render() {
    return (
          <Navbar/>
    );
  }
}

const styles = StyleSheet.create({

});