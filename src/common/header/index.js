import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom'
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style.js'



class Header extends Component {
    render() {
        const { focused, list, handleInputFocus, handleInputBlur, login} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left download-app'>下载APP</NavItem>
                    {login ? <NavItem className='right' onClick={this.props.userLogout}>退出</NavItem> :
                        <Link to='/login'>
                            <NavItem className='right'>登录</NavItem>
                        </Link>
                    }
                    <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={(e) => { handleInputFocus(list); }}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe637;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'><i className="iconfont">&#xe615;</i>写文章</Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    //根据是否聚焦来显示下拉框
    getListArea = () => {
        const { focused, mouseIn, list, page, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        if (!focused && !mouseIn)
            return null;
        const newList = list.toJS();
        if(newList.length === 0)
            return null
        const pageList = [];
        for (let i = (page - 1) * 10; i < newList.length && i < page * 10; i++) {
            pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>)
        }
        return (
            <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>热门搜索
                    <SearchInfoSwitch onClick={(e) => {handleChangePage(this.spinIcon)}}>
                    <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
        )

    }
}

const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
})
const mapDispatchToProps = (dispatch) => ({
    handleInputFocus: (list) => {
        //改变state.header.focused为true
        dispatch(actionCreators.searchFocuseAction())
       if(list.size === 0){
           //list是不可变对象 immutable, 没有length属性
            //获取小框的数据
            dispatch(actionCreators.getList())
       }
    },
    handleInputBlur: (e) => {
        dispatch(actionCreators.searchBlurAction())
    },
    handleMouseEnter: (e) => {
        dispatch(actionCreators.mouseEnterAction())
    },
    handleMouseLeave: (e) => {
        dispatch(actionCreators.mouseLeaveAction())
    },
    handleChangePage: (spinIcon) => {
        //设置icon旋转角度
        let angle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
        if(angle){
            angle = parseInt(angle)
        }else{
            angle = 0;
        }
        spinIcon.style.transform = 'rotate(' + (angle + 360) + 'deg)';

        dispatch(actionCreators.changePageAction())
    },
    userLogout: (e) => {
        dispatch(loginActionCreators.changeLoginAction(false))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);