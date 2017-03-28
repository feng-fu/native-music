import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Index extends Component {
	static defaultProps = {
	    title: 'MyScene'
	}
	render() {
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