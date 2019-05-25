import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect} from 'react-router-dom'


class Write extends Component {
    render(){
        const { login } = this.props;
        if(login){
            return (
                <div>write page</div>
            )
        }else{
            return <Redirect to='/login' />
        }

    }

}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Write)