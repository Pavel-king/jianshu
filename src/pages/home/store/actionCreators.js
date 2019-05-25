import * as constants  from './actionTypes'
import axios from 'axios'

const setDataFromAxiosToStateAction = (data) => ({
    type: constants.SET_DATA_LIST,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList,
    writerList: data.writerList
})

export const getHomeDataListAction = () => {

    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            if(res.data.success)
                dispatch(setDataFromAxiosToStateAction(res.data.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

const setMoreListAction = (data, page) => ({
    type: constants.SET_MORE_LIST,
    data: data,
    page: page
})

export const getMoreListAction = (page) => {
    return (dispatch) => {
        axios.get('/api/moreList.json?page=' + page).then((res) => {
            if(res.data.success){
                dispatch(setMoreListAction(res.data.data, page + 1))
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const toggleScrollTopShowAction = (boolValue) => ({
    type: constants.TOGGLE_SCROLL_TOP_SHOW,
    boolValue: boolValue
})