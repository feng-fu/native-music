import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight, StyleSheet } from 'react-native';


export default class MyScene extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          category: '欧美',
          id: 3
        },
        {
          category: '内地',
          id: 5
        },
        {
          category: '港台',
          id: 6
        },
        {
          category: '韩国',
          id: 16
        },
        {
          category: '日本',
          id: 17
        },
        {
          category: '民谣',
          id: 18
        },
        {
          category: '摇滚',
          id: 19
        },
        {
          category: '销量',
          id: 23
        },
        {
          category: '热歌',
          id: 26
        }
      ])
    };
  }
  toPropDetail (id) {
    console.log(id)
  }
  render() {
    return (
      <View style={ styles.container }>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <TouchableHighlight onPress={() => {
                console.log(this.props)
                return this.props.navigation.navigate('list', {id: rowData.id})
                }} style={styles.box}>
                <Text>{rowData.category}</Text>
              </TouchableHighlight>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 1,
    borderColor: '#0683e5',
    borderStyle: 'solid',
  },
})