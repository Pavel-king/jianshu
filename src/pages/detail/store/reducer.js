import { fromJS } from 'immutable'
import * as constants from './actionTypes'


const defaultState = fromJS({
    "title": "",
    "content": ""
})

export default (preState = defaultState, action) => {
    switch (action.type) {
        case constants.SET_DETAIL_ACTION:
            return preState.merge({
                title: fromJS(action.data.title),
                content: fromJS(action.data.content)
            })
        default:
            return preState
    }
}