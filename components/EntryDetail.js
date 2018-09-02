import React, { Component } from 'react'
import { View, Text } from 'react-native'


export default class EntryDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { entryID } = navigation.state.params

    const year = entryID.slice(0, 4)
    const month = entryID.slice(5, 7)
    const day = entryID.slice(8)

    return {
      title: `${day}/${month}/${year}`
    }
  }
  render() {
    return (
      <View>
        <Text> Entry Detail </Text>        
      </View>
    )
  }
}
