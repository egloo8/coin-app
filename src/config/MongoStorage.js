import { AsyncStorage } from 'react-native'
import { apiBaseURL } from './Constants'

export function loadState() {
    // try {
    //     const userID = await AsyncStorage.getItem("reduxPersist:user")
    //     if (userID) {
    //         await fetch(`${apiBaseURL}/users/${userID}/amounts`)
    //             .then(res => res.json())
    //             .then(res => { return JSON.parse(res) })
    //             .catch((error) => {
    //                 return undefined
    //             })
    //     }
    // } catch (err) {
    //     return undefined
    // }

    return AsyncStorage.getItem("reduxPersist:user").then((userID) => {
        if (userID) {
            fetch(`${apiBaseURL}/users/${userID.replace(/['"]+/g, '')}/amounts`)
                .then(res => res.json())
                .then(res => {
                    return JSON.parse(res)
                })
                .catch((error) => {
                    return undefined
                })
        }
    })

}