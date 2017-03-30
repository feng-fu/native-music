import React, {Component} from 'react'
import {
	StyleSheet,
	View,
} from 'react-native'

import Header from './header'
import Bottom from './bottom'
import Content from './content'

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
				<Content/>
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