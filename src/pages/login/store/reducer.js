import { fromJS } from 'immutable'
import * as constants from './actionTypes'


const defaultState = fromJS({
    login: false
})

export default (preState = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return preState.set('login', fromJS(action.data))
        default:
            return preState
    }
}