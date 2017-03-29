import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Utils from './../normal/utils'

export default class Index extends Component {
	static defaultProps = {
	    title: 'MyScene'
	}
	constructor(props) {
	  super(props);
	  this.state = {
	  	linked: false,
	  	data: []
	  };
	}
	async componentDidMount () {
		let response = await Utils.fetchRequest('https://cnodejs.org/api/v1/topics')
		this.setState({data: response.data})
	}
	_handleClick (e) {
		console.log('in')
		this.setState({
			linked: !this.state.linked
		})
	}
	render() {
		let word = this.state.linked? 'ass':'dbb';
		return (
			<View style={ styles.handbar }>
				<Text>111 {this.props.title}</Text>
				<Text onPress={ this._handleClick.bind(this) }>{word}</Text>
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