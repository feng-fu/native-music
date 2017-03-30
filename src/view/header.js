// 顶部内容

import React, {Component} from 'react'
import {
	StyleSheet,
	View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render () {
		return (
			<View style={[styles.container, styles.layout]}>
				<Icon name="list" size={20} color="#fff" />
				<View style={styles.layout}>
					<Icon name="search" size={20} color="#fff" />
					<Icon style={styles.between} name="headphones" size={20} color="#fff" />
				</View>
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