import * as constants from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocuseAction = () => ({
    type: constants.SEARCH_FOCUSE
})

export const searchBlurAction = () => ({
    type: constants.SEARCH_BLUR
})
const changeListAction = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data
            const action = changeListAction(data.data)
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export const mouseEnterAction = () => ({
    type: constants.MOUSE_ENTER
})
export const mouseLeaveAction = () => ({
    type: constants.MOUSE_LEAVE
})
export const changePageAction = () => ({
    type: constants.CHANGE_PAGE
})