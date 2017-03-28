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
	async componentDidMount () {
		// fetch('https://cnodejs.org/api/v1/topics').then(res => res.json())
		// .then(res => console.log(res))
		// .catch(err=> console.log(`err:${err}`))
		let response = await Utils.fetchRequest('https://cnodejs.org/api/v1/topics')
		console.log(response)
		this.setState({data: response.data})
	}
	render() {
		console.log(this.data)
		return (
			<View style={ styles.handbar }>
				<Text>111 {this.props.title}</Text>
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