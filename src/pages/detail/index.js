import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom' 
import {actionCreators} from './store'
import {
    DetailWrapper,
    Header,
    Content
} from './style.js'


class Detail extends Component {
    render(){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML= { {__html: this.props.content} }>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => ({
    getDetail: (id) => {
        dispatch(actionCreators.getDetailAction(id))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))