import * as constants from './actionTypes'
import axios from 'axios'

export const changeLoginAction = (value) => ({
    type: constants.CHANGE_LOGIN,
    data: value
})

export const loginAction = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
            if(res.data.data){
                dispatch(changeLoginAction(true))
            }else{
                dispatch(changeLoginAction(false))
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
}