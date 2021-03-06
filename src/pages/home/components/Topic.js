import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    TopicWrapper,
    TopicItem
} from '../style.js'

class Topic extends Component {
    render(){
        const {topicList} = this.props;
        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                        return (
                        <TopicItem key={item.get('id')}>
                            <img className='top-pic' src={item.get('imgUrl')} alt=''/>
                            {item.get('title')}
                        </TopicItem>)
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic);