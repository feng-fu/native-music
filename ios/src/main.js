import React from 'react'
import {
  View, Text
} from 'react-native'

export default class reactnative extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    console.log(1)
    return (
      <Text style={styles.red}>red</Text>
    )
  }
}

let styles = StyleSheet.create({
  red: {
    color: 'red',
  },
})