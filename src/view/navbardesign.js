import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

export default class navbarStyle extends Component {
	propTypes = {
		goToPage: React.PropTypes.func,
		activeTab: React.PropTypes.number,
		tabs: React.PropTypes.array,
	}
	renderTabOption (tab, i) {
		let color = this.props.activeTab == i ? '#0683e5':'#8a97ab';
		return (
			<TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab}>
				<View style={styles.tebItem}>
					<Icon name={this.props.tabIconNames[i]} // 图标
						size={30}
						color={color}/>
					<Text style={{color: color}}>
						{this.props.tabNames[i]}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
	render () {
		return (
			<View style={styles.tabs}>
				{this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		height: 50,
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},
})