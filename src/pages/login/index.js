import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect} from 'react-router-dom'
import {actionCreators} from './store'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style.js'


class Login extends Component {
    render(){
        const { login } = this.props;

        if(login){
           return <Redirect to='/' />
        }else{
            return (
                    <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={ (input) => {this.account = input}}/>
                        <Input placeholder='密码' type='password' innerRef={ (input) => {this.password = input} }/>
                        <Button onClick={(e) => {this.props.userLogin(this.account, this.password) }}>登录</Button>
                    </LoginBox>
                    </LoginWrapper>  
            )
        }
    }

}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    userLogin: (accountEle, passwordEle) => {
        dispatch(actionCreators.loginAction(accountEle.value, passwordEle.value))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)