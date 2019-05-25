import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    WriterWrapper,
    WriterTitle,
    WriterTitleRight,
    WriterItem,
    FollowButton,
    WriterName,
    WriterDescribe,
    ViewAll
} from '../style.js'

class Writer extends Component {
    render(){
        const list = this.props.list.toJS();
        return (
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterTitleRight onClick={(e) => {this.props.iconSpinClick(this.refs.spinIcon)}}><i ref='spinIcon' className="iconfont">&#xe851;</i>换一批</WriterTitleRight>
                </WriterTitle>
                {
                    list.map( item => {
                        return (
                            <WriterItem key = {item.id}>
                                <img className='writerPic' src={item.writerPic} alt=''/>
                                <FollowButton><i className="iconfont">&#xe613;</i>关注</FollowButton>
                                <WriterName>{item.writerName}</WriterName>
                                <WriterDescribe>{item.writerDescribe}</WriterDescribe>
                            </WriterItem>
                        )
                    })
                }
                <ViewAll>查看全部<i className="iconfont">&#xe601;</i></ViewAll>
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'writerList'])
})
const mapDispatchToProps = (dispatch) => ({
    iconSpinClick: (DOMNode) => {
        let angle = DOMNode.style.transform;
        angle = angle.replace(/[^\d]/ig, '');
        if(angle){
            angle = parseInt(angle, 10)
        }else{
            angle = 0;
        }
        console.log(angle)
        DOMNode.style.transform  = 'rotate('+ (angle + 360) +'deg)'
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Writer);