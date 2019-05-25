import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { actionCreators } from '../store'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style.js'

class List extends Component {
    render() {
        const { articleList, getMoreList, page } = this.props;
        return (
            <div>
                {
                    articleList.map((item, index) => {
                        return (
                            // <ListItem key={item.get('id')}> 正常情况下用id，这里模拟数据用index
                        <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem >
                                <img className='img-pic' src={item.get('imgUrl')} alt='' />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                            
                        );
                    })
                }
                <LoadMore onClick={ (e) => {getMoreList(page)} }>阅读更多</LoadMore>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});
const mapDispatchToProps = (dispatch) => ({
    getMoreList: (page) => {
        dispatch(actionCreators.getMoreListAction(page))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List)