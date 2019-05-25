import axios from 'axios'
import * as constants from './actionTypes'

const setDetailAction = (data) => ({
    type: constants.SET_DETAIL_ACTION,
    data: data
})

export const getDetailAction = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            if(res.data.success){
                dispatch(setDetailAction(res.data.data))
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}