import styled  from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;
export const HomeWLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    margin-left: 18px;
    margin-bottom: 18px;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .top-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .img-pic{
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        background: red;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;
export const RecommendWrapper = styled.div`
    margin: 30px 0 10px 0;
    width: 280px;
`;
export const RecommendItem = styled.div`
    margin: 5px 0;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const QRCodeWrapper = styled.div`
    padding: 10px 22px;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 6px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .qrcode-img{
        float: left;
        width: 60px;
        height: 60px;
        opacity: .85;
    }
`;
export const QRCodeBox = styled.div`
    float: left;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    line-height: 24px;
    margin-top: 10px;
`;
export const QRCodeTitle = styled.div`
    font-size: 15px;
    color: #333;
    line-height: 21px;
    .iconfont{
        font-size: 20px;
        float: right;
    }
`;
export const QRCodeDetail = styled.p`
    font-size: 13px;
    color: rgb(153, 153, 153);
`;
export const WriterWrapper = styled.div`
    width: 100%;
    margin-top: 30px;
`;
export const WriterTitle = styled.div`
    overflow: hidden;
    font-size: 14px;
    color: #969696;
`;

export const WriterTitleRight = styled.span`
    float: right;
    color: #969696;
    font-size: 14px;
    line-height: 20px;
    .iconfont{
        transition: all .2s ease-in;
        transform-origin: center center;
        display: block;
        float: left;
    }
`;
export const WriterItem = styled.div`
    margin-top: 15px;
    overflow: hidden
    .writerPic{
        float: left;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #ddd;
    }
`;

export const FollowButton = styled.div`
    float: right;
    font-size: 13px;
    color: #42c02e;
    .iconfont{
        font-size: 13px;
    }
`;

export const WriterName = styled.div`
    margin-left: 60px;
    padding-top: 5px;
    color: #2f2f2f;
    font-size: 14px;
`;

export const WriterDescribe = styled.p`
    margin-left: 60px;
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
`;

export const ViewAll = styled.div`
    margin-top: 15px;
    width: 100%;
    padding: 8px 7px 10px 12px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`;