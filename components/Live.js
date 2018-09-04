import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import {Foundation } from '@expo/vector-icons'
import { purple, white } from '../utils/colors'

export default class Live extends Component {
  state = {
    coords: null,
    status: 'undetermined',
    direction: '',
  }

  render() {
    const { coords, status, direction } = this.state
    
    if (status === null) {
      return <ActivityIndicator style={{marginTop: 30}} />
    }

    if (status === 'denied') {
      return (
        <View>
          <Text> Denied. </Text>
        </View>
      )
    }

    if (status === 'undetermined') {
      return (
        <View>
          <Text> Undetermined. </Text>
        </View>
      )
    }

    return (
      <View> 
        <Text> Live </Text>
        <Text> {JSON.stringify(this.state)} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  center: { 
    flex: 1,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: white,
    fontSize: 20,
  }
})
