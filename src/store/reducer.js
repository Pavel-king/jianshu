import {combineReducers} from 'redux-immutable'
import {reducer as headerReducers} from '../common/header/store'
import {reducer as homeReducers} from '../pages/home/store'
import {reducer as detailReducers} from '../pages/detail/store'
import {reducer as loginReducers} from '../pages/login/store'
//header为子reducer的名字
export default combineReducers({
    header: headerReducers,
    home: homeReducers,
    detail: detailReducers,
    login: loginReducers
})