// 内容区

import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	ListView,
} from 'react-native'
import Utils from './../normal/utils'

export default class Content extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	static defaultProps = {
		dataSource: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows([
		        {
		        	name: 'john',
		        	id: 3
		        },
		        {
		        	name: 'jack',
		        	id: 5
		        }
		      ])
	}
	async _getCategoryDetail (id) {
		id = id || 3;
		let response = await Utils.fetchRequest('http://route.showapi.com/213-4',{
			body: `topid=${id}`
		})
		let data = response.showapi_res_body.pagebean.songlist
		
	}

	render () {
		return (
			<ListView 
				style={styles.layout}
				dataSource={this.props.dataSource}
          		renderRow={(rowData) => <Text onPress={this._getCategoryDetail.bind(this, rowData.id)}>{rowData.name}</Text>}
			>

			</ListView>
		)
	}
}

const styles = StyleSheet.create({
	layout: {
		flexDirection: 'row',
		width: 385,
		backgroundColor: '#f5f5f5'
	}
})