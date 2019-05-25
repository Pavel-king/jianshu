import {fromJS} from 'immutable'
import * as constants  from './actionTypes'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
});

export default (preState = defaultState, action) => {
    switch(action.type){
        case constants.SET_DATA_LIST:
            return preState.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            });
        case constants.SET_MORE_LIST:
            // let newList = preState.get('articleList').toJS()
            // newList = newList.concat(action.data)
            // newList = fromJS(newList)
            // return preState.set('articleList', newList)
            return preState.merge({
                articleList: preState.get('articleList').concat(fromJS(action.data)),
                articlePage: fromJS(action.page)
            })
        case constants.TOGGLE_SCROLL_TOP_SHOW:
            return preState.set('showScroll', fromJS(action.boolValue))
        default:
            return preState;
    }
}