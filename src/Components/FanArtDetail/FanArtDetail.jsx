import React, {Component} from 'react';
import axios from 'axios';
import './style.scss'

class FanArtDetail extends Component {
  constructor (props) {
    super(props);
    // console.log(this.props.id)
    this.state = {
      id: this.props.id,
      videoDetail: {},
      flag: false
    }
  }

  componentWillMount () {
    // console.log(this.state.id)
    axios.get('/v1/fanart_detail', {
      params: {
        contentId: this.state.id
      }
    }).then(data => {
      console.log(data.data.jData.data)
      this.setState({
        videoDetail: data.data.jData.data,
        flag: true
      })
    })
  }

  

  render () {
    let userimg = '';
    if (this.state.flag == true) {
      userimg = this.state.videoDetail.sUrl.replace('s=40', 's=100')
    }
    console.log(userimg)
    return (
      <div id="Lfanart">
        <div className="fanlayout">
          <div id="main">
            <div className="nav">
              <a href="#">首页 > 画作详情</a>
            </div>
            <div className="detail">
              <div className="user">
                <div className="user-top">
                  <img src={userimg} className="userimg"/>
                  <h4>{this.state.videoDetail.sNickName} <img src="/images/sex.jpg" /></h4>
                  <div className="box">关注</div>
                  <h5>官方号，分享美服Fanart玩家作<br />品</h5>
                  <div className="box2">http://fanart.na.leagueoflegen<br />ds.com/</div>
                  <div className="box3 clear">
                    <div className="box3-left">214<br /><span>作品数</span></div>
                    <div className="box3-right">1724<br /><span>粉丝数</span></div>
                  </div>
                </div>
                <div className="user-bottom">
                  <h6>分享到：<img src="/images/lianjie1.jpg" />&nbsp;<img src="/images/lianjie2.jpg" />&nbsp;<img src="/images/lianjie3.jpg" />&nbsp;<img src="/images/lianjie4.jpg" />&nbsp;</h6>
                </div>
              </div>


              <h3>{this.state.videoDetail.sTitle}</h3>
              <p className="p1"><img src="/images/art.jpg" /> 画作</p>
              <p className="p2">一天前 发布&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/images/see.jpg" /> 浏览： 529</p>
              <p className="p3">{this.state.videoDetail.sIntro}</p>
              <div className="photo">
                <img src={this.state.videoDetail.sCoverUrl} />
                <ul className="clear">
                  <li><img src="/images/zan.jpg" /><h4>8</h4></li>
                  <li><img src="/images/shoucang.jpg" /><h4>0</h4></li>
                </ul>
              </div>
            </div>


            <div className="comment">
              <div className="comment-top">
                <h4><img src="/images/zuopin.jpg" /> 其他作品</h4>
                <ul>
                  <li><a href="#"><img src="/images/zuopin1.jpg" /></a></li>
                  <li><a href="#"><img src="/images/zuopin2.jpg" /></a></li>
                  <li><a href="#"><img src="/images/zuopin3.jpg" /></a></li>
                  <li><a href="#"><img src="/images/zuopin4.jpg" /></a></li>
                </ul>
              </div>
              <div className="comment-bottom">
                <h4>参与回复  (0 回复)</h4>
                <textarea placeholder="说点什么吧..."></textarea>
                <p className="emit"><a href="#"><img src="/images/emit.jpg" /> 发表评论</a></p>
                <p className="evalute">最新评论</p>
                <p className="noevalute"><img src="/images/ali.jpg" /></p>
                <span>暂无评论</span>
              </div>
            </div>

          </div>
        </div>
        <div className="fanfooter">
          <div className="fanmargin">
            <div className="footer-left">
              <ul className="clear">
                <li className="li1"><a href="#"><img src="/images/TXlogo.jpg" /></a></li>
                <li className="li2"><img src="/images/Riotlogo.jpg" /></li>
                <li className="li3"><a href="#"><img src="/images/LOLbox.jpg" />掌上<br />英雄联盟</a></li>
                <li className="li3"><a href="#"><img src="/images/xinlang.jpg" />英雄联盟同人微博</a></li>
              </ul>
            </div>
            <div className="footer-right">
              <p className="p1">
                <a href="#">腾讯互动娱乐</a><span>|</span>
                <a href="#">服务条款</a><span>|</span>
                <a href="#">腾讯游戏隐私保护指引</a><span>|</span>
                <a href="#">腾讯游戏招聘</a><span>|</span>
                <a href="#">腾讯游戏客服</a><span>|</span>
                <a href="#">游戏地图</a><span>|</span>
                <a href="#">商务合作</a><span>|</span>
                <a href="#">腾讯网</a><span>|</span>
                <a href="#">网站导航</a>
              </p>
              <p className="p2">
                <a href="#">用户协议</a><span>|</span>
                <a href="#">作品上传协议</a><span>|</span>
                <a href="#">腾讯公司版权所有</a>
              </p>
              <p className="p2">
                COPYRIGHT © 1998 - 2019 TENCENT. ALL RIGHTS RESERVED.
              </p>
              <p className="p2">
                <a href="#">粤网文[2017]6138-1456号</a><span>|</span>
                <a href="#">（总）网出证（粤）字第057号</a>
              </p>
            </div>

            <div className="bg1"><img src="/images/bgqie.jpg" /></div>
            <div className="bg2"><img src="/images/bgtimo.jpg" /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default FanArtDetail