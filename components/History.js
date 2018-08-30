import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { fetchCalendarResults } from '../utils/api'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import UdaciFitnessCalendar from 'udacifitness-calendar'
import { white } from '../utils/colors'
import DateHeader from './DateHeader'


class History extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    fetchCalendarResults()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          dispatch(addEntry({
            [timeToString()]: getDailyReminderValue(),
          }))
        }
      })
  }

  renderItem = ({today, ...metrics}, formattedDate, key) => (
    <View style={styles.item}>
      {today
        ? <View>
            <DateHeader date={formattedDate}/>
            <Text style={styles.noDataText}>
              {today}
            </Text>
          </View>
        : <TouchableOpacity
            onPress={console.log("pressed")}
            >
              <Text>{JSON.stringify(metrics)}</Text>
            </TouchableOpacity>
      }
    </View>
  )
  renderEmptyDate(formattedDate) {
    return (
      <View styles={styles.item}>
        <DateHeader date={formattedDate} />
        <Text style={styles.noDataText}>
          No data for this day.
        </Text>
      </View>
    )
  }

  render() {
    const { entries } = this.props

    return (
        <UdaciFitnessCalendar 
          items={entries}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
        />
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginTop: 17,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  noDataText: {
    paddingTop: 20,
    paddingTop: 20, 
    fontSize: 20,
  }

})

function mapStateToProps(entries) {
  return {
    entries
  }
}


export default connect(mapStateToProps)(History)