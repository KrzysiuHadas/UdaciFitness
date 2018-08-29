import React from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { FontAwesome, white, purple, gray, Entypo } from '@expo/vector-icons'


const UdaciSteppers = ({ max, unit, step, value, onIncrement, onDecrement }) => {
    return (
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
            {
                Platform.OS === 'ios' 
                ?   <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={onDecrement} style={[styles.iOSBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}>
                            <Entypo name='minus' size={30} color={purple} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onIncrement} style={[styles.iOSBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}>
                            <Entypo name='plus' size={30} color={purple} />
                        </TouchableOpacity>
                    </View>
                :   <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={onDecrement} style={[styles.androidBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}>
                            <FontAwesome name='minus' size={30} color={white} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onIncrement} style={[styles.androidBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}>
                            <FontAwesome name='plus' size={30} color={white} />
                        </TouchableOpacity>
                    </View>
            }
            
            <View style={styles.metricCounter}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
                <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    iOSBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    androidBtn: {
        margin: 5,
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2,
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default UdaciSteppers