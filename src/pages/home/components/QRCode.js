import React, {Component} from 'react'

import {
    QRCodeWrapper,
    QRCodeBox,
    QRCodeTitle,
    QRCodeDetail
} from '../style.js'

class QRCode extends Component{
    render(){
        return (<QRCodeWrapper>
            <img className='qrcode-img' src='/qrcode.png' alt='' />
            <QRCodeBox>
                <QRCodeTitle>下载简书手机App<i className="iconfont">&#xe601;</i></QRCodeTitle>
                <QRCodeDetail>随时随地发现和创作内容</QRCodeDetail>
            </QRCodeBox>
        </QRCodeWrapper>)
    }
}

export default QRCode;