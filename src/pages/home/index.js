import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
//组件
import Topic from './components/Topic.js'
import List from './components/List.js'
import Recommend from './components/Recommend.js'
import QRCode from './components/QRCode.js'
import Writer from './components/Writer.js'
import {
    HomeWrapper,
    HomeWLeft,
    HomeRight,
    BackTop
} from './style.js'

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeWLeft>
                    <div><img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/></div>
                <Topic />
                <List />
                </HomeWLeft>
                <HomeRight>
                    <Recommend />
                    <QRCode />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.getHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    handleScrollTop(){
        window.scrollTo(0, 0);
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) =>({
    getHomeData: () => {
        dispatch(actionCreators.getHomeDataListAction());
    },
    changeScrollTopShow: (e) => {
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleScrollTopShowAction(true))
        }else{
            dispatch(actionCreators.toggleScrollTopShowAction(false))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)