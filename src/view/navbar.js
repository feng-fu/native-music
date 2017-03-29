import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Navigator,
	Text
} from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view';

import IndexF from './index'
import IndexS from './index2'
import NavbarD from './navbardesign'

export default class Navbar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	tabNames: ['首页', '详情页'],
	  	tabIconNames: ['./../source/ico.png', './../source/ico.png']
	  };
	}
	render() {
		let tabNames = this.state.tabNames;
		let tabIconNames = this.state.tabIconNames;
		return (
			<ScrollableTabView
			  renderTabBar={() => <NavbarD tabNames={tabNames} tabIconNames={tabIconNames}/>}>
		    <View style={styles.content} tabLabel='key1'>
					<IndexF/>
				</View>

				<View style={styles.content} tabLabel='key2'>
					<IndexS/>
				</View>
		  </ScrollableTabView>	
		)
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	content: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EBEBEB',
		flex: 1
	}
})