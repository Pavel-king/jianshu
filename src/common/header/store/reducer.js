import * as constants from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})

export default (preState=defaultState, action) => {
    switch(action.type){
        case constants.SEARCH_FOCUSE:
            return preState.set('focused', true);
        case constants.SEARCH_BLUR:
            return preState.set('focused', false);
        case constants.CHANGE_LIST:
            return preState.merge({
                'list': action.data,
                'totalPage': action.totalPage
            });
        case constants.MOUSE_ENTER:
            return preState.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return preState.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            let newPage = preState.get('page') + 1;
            if(newPage > preState.get('totalPage')){
                newPage = 1;
            }
            return preState.set('page', newPage);
        default: 
            return preState;
    }
}