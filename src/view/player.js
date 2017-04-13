// 底部区域

import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    static navigationOptions = {
    	title: ({ state }) => `歌名`,
  	};
    componentDidMount() {
        
    }
    _pause() {
      
    }
    _play() {
        
    }
    render() {
        return ( 
          <View style={styles.container}>
            <View style={styles.header}>
					    <Icon name="search" size={20} color="#fff" />
              <Text>标题</Text>
            </View>
            <View>
              <Image/>
              {/*歌词列表*/}
            </View>
            {/*播放进度条*/}
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#c70c0c',
  },
})