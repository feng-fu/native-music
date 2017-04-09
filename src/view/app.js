import React, {Component} from 'react'
import {
	StyleSheet,
	View,
} from 'react-native'

import Header from './header'
import Bottom from './bottom'
import Content from './school'

export default class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	static navigationOptions = {
    	title: 'Welcome',
  	};
	render () {
		return (
			<View style={ styles.view }>
				<Header/>
				<Content style={ styles.view }/>
				<Bottom/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	view: {
		flex: 1
	}
})