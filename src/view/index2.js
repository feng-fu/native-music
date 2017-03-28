import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


export default class MyScene extends Component {
  render() {
    return (
      <View style={[styles.container,styles.wrap]}>
          <Text>11112</Text>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
	},
	wrap: {
		flexDirection: 'row',
		height: 40,
	},
	detail: {
		flex: 1,
		backgroundColor: '#8a97ab',
	},
	wordStyle: {
		textAlign:'center',
		lineHeight: 40,
	}
})