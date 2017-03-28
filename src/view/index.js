import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class homePage extends Component {
  render() {
    return (
    	<View style={ styles.handbar }>
    		<Text>111</Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	handbar: {
		height: 50,
		backgroundColor: '#ef0',
	}
});