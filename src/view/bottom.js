// 底部区域

import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

let num;

export default class Bottom extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	bannerWidth: 0,
	  	playState: true
	  };
	}
	componentDidMount () {
		clearInterval(num)
		num = setInterval(()=> {
			this.setState({
				bannerWidth: this.state.bannerWidth + 1
			})
			if (num === 200) {
				this.setState({
					bannerWidth: 0
				})
			};
		},1000)
	}
	_pause () {
		clearInterval(num)
	}
	_play () {
		clearInterval(num)
		num = setInterval(()=> {
			this.setState({
				bannerWidth: this.state.bannerWidth + 1
			})
			if (num === 200) {
				this.setState({
					bannerWidth: 0
				})
			};
		},1000)
	}
	render () {
		let show = this.state.playState?'visible':'hidden'
		return (
			<View style={[styles.layout, styles.container]}>
				<View>
					<View style={styles.banner}>
					</View>
					<View style={[styles.bannerIn,{width: this.state.bannerWidth}]}>
					</View>
					<View style={[styles.circle,{left: this.state.bannerWidth - 2}]}></View>
					
				</View>
				<Icon style={styles.center} name="pause-circle" size={20} color="#fff" onPress={this._pause.bind(this)}/>
				<Icon style={styles.center} name="play-circle" size={20} color="#fff" onPress={this._play.bind(this)}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	layout: {
		flexDirection: 'row',
		justifyContent: 'center',
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
		backgroundColor: '#dd5962',
	},
	center: {
		marginLeft: 20,
		marginRight: 20
	},
	banner: {
		width: 200,
		height: 4,
		marginTop: 11,
		borderRadius: 2,
		backgroundColor: "#ccc"
	},
	bannerIn: {
		position: 'absolute',
		top: 11,
		left: 0,
		borderRadius: 2,
		height: 4,
		backgroundColor: "green"
	},
	circle: {
		width: 10,
		height: 10,
		position: 'absolute',
		borderRadius: 2,
		backgroundColor: "#c70c0c",
		borderWidth: 3,
		borderColor: "#fff",
		borderStyle: "solid",
		top: 8,
	},
})