// 底部区域

import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Bottom extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render () {
		return (
			<View style={[styles.layout, styles.container]}>

				<Icon name="backward" size={20} color="#fff" />
				<Icon name="pause-circle" size={20} color="#fff" />
				<Icon name="forward" size={20} color="#fff" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	layout: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	between: {
		marginLeft: 20,
	},
	container: {
		width: 385,
		height: 40,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#c70c0c',
	}
})