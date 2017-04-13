// 内容区

import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	ListView,
	ScrollView,
	Image,
} from 'react-native'
import Axios from 'axios'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Content extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	dataSource: ds.cloneWithRows([])
	  	};
	}
  static navigationOptions = {
    title: ({ state }) => `热门`,
  }
	componentWillMount (id) {
		Axios.get('http://route.showapi.com/213-4',{
  			params:{
  			    showapi_appid:'34383',
  			    showapi_sign:'8a31cc27032f4356bedc2d53950d43dd',
  			    topid:5
  			}
		}).then(res=>{
			res = res.data.showapi_res_body.pagebean.songlist;
			this.setState({
				dataSource: ds.cloneWithRows(res)
			})
		}).catch(err=>console.log(err))
	}

	render () {
		return (
			<ScrollView>
			<ListView 
				enableEmptySections={true}
				style={styles.layout}
				initialListSize={100}
				dataSource={this.state.dataSource}
          		renderRow={(rowData)=>{
          			return (
          				<View style={styles.listStyle}>
          					<Image style={styles.image} source={{uri:rowData.albumpic_small}}/>
          					<Text>{rowData.songname}</Text>
          				</View>
          			)
          		}}
			/></ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	layout: {
		flexDirection: 'row',
		width: 385,
		backgroundColor: '#f5f5f5',
		flex: 1,
	},
	image: {
		width: 20,
		height: 20,
		borderRadius: 10,
		margin: 10,
	},
	listStyle: {
		flexDirection:'row'
	}
})