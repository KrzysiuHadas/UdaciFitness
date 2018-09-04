import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import {Foundation } from '@expo/vector-icons'
import { purple, white } from '../utils/colors'

export default class Live extends Component {
  state = {
    coords: null,
    status: 'denied',
    direction: '',
  }
  askPermission = () => {

  }

  render() {
    const { coords, status, direction } = this.state
    
    if (status === null) {
      return <ActivityIndicator style={{marginTop: 30}} />
    }

    if (status === 'denied') {
      return (
        <View style={styles.center}>
          <Foundation name="alert" size={50} />
          <Text>You denied you location. You can fix this by visiting your settings and enabling location services for you app.</Text>
        </View>
      )
    }

    if (status === 'undetermined') {
      return (
        <View style={styles.center}>
          <Foundation name="alert" size={50} />
          <Text>You need to enable location services for this app.</Text>
          <TouchableOpacity onPress={this.askPermission} style={styles.button} >
            <Text style={styles.buttonText}>
              Enable
            </Text>
          </TouchableOpacity>
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
    alignItems: 'center',
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
