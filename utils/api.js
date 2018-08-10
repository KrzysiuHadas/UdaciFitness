import { AsyncStorage } from 'react-native'
import { CALDENDAR_STORAGE_KEY, CALENDAR_STORAGE_KEY } from './_calendar'

export function submitEntry ({ entry, key }) {
    return AsyncStorage.mergeItem(CALDENDAR_STORAGE_KEY, JSON.stringify({
        [key]: entry,
    }))
}

export function removeEntry ({ key }) {
    return AsyncStorage.getItem(CALDENDAR_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
        })
}