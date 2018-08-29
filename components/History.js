import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { fetchCalendarResults } from '../utils/api'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import {timeToString, getDailyReminderValue } from '../utils/helpers'


class History extends Component {
    componentDidMount() {
        const { dispatch } = this.props
    }

    render() {
        return (
            <View>
                <Text>History</Text>
            </View>
        )
    }
}

export default History;