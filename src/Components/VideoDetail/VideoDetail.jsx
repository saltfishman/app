import React, {Component} from 'react'
import axios from 'axios';
import './style.scss' 

class VideoDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  
  render () {

    return (
      <div id="video">
        <div className="vedionav">
          <div className="videoMargin">
            <div className="nav-l">
              <img src="/images/LOLlogo.jpg" width="132px" height="49px" />
              <a href="#">视频中心</a>
            </div>
            <div className="nav-m">
              <a href="#">首页<br /><span>HOME</span></a>
              <a href="#">官方<br /><span>OFFICIAL</span></a>
              <a href="#">娱乐<br /><span>ENTERTAINMENT</span></a>
              <a href="#">赛事<br /><span>MATCH</span></a>
              <a href="#">教学<br /><span>GUIDE</span></a>
            </div>
            <div className="nav-r">
              <p>
                <img src="/images/search.jpg" /><img src="/images/user2.jpg" /> 亲爱的召唤师，欢迎<a href="#">登陆</a></p>
            </div>
          </div>
        </div>

        <div className="banner">

        </div>
        <div className="videomargin">
          <div className="main">
            <div className="main-l">
              <div className="main-l-t clear">
                <p><img src="/images/shu.jpg" width="3px" height="26px" />相关推荐</p>
                <a href="#"><img src="/images/shuaxin.jpg" /> 换一批</a>
              </div>

              <div className="main-l-m">
                <ul>
                  <li>
                    <img src="/images/videophoto.jpg" />
                    <a href="#">大神怎么玩：彩旗卡特vsDopa卡牌 手速和战略谁更重要</a>
                    <p><img src="/images/video.jpg" /> 19.3万次播放 &nbsp;&nbsp;&nbsp;2018-08-16</p>
                  </li>
                  <li>
                    <img src="/images/videophoto.jpg" />
                    <a href="#">大神怎么玩：彩旗卡特vsDopa卡牌 手速和战略谁更重要</a>
                    <p><img src="/images/video.jpg" /> 19.3万次播放 &nbsp;&nbsp;&nbsp;2018-08-16</p>
                  </li>
                  <li>
                    <img src="/images/videophoto.jpg" />
                    <a href="#">大神怎么玩：彩旗卡特vsDopa卡牌 手速和战略谁更重要</a>
                    <p><img src="/images/video.jpg" /> 19.3万次播放 &nbsp;&nbsp;&nbsp;2018-08-16</p>
                  </li>
                  <li>
                    <img src="/images/videophoto.jpg" />
                    <a href="#">大神怎么玩：彩旗卡特vsDopa卡牌 手速和战略谁更重要</a>
                    <p><img src="/images/video.jpg" /> 19.3万次播放 &nbsp;&nbsp;&nbsp;2018-08-16</p>
                  </li>  
                </ul>
              </div>
              <div className="main-l-b">
                <div className="main-l-b-t">
                  <h3>网友评论 <span>文明上网理性发信，请遵守<a href="#">新闻评论服务协议</a></span></h3>
                  <i>0条评论</i>
                </div>
                <div className="main-l-b-b">
                  <img src="/images/user3.jpg" />
                  <div className="evolutebox">
                    <textarea className="evolute" placeholder="说两句吧..."></textarea>
                    <div className="login">登录</div>
                    <h4>暂无评论哦！赶快来评论一下吧！</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-r">
              <div className="main-r-t">
                <p><img src="/images/shu.jpg" width="3px" height="26px" />相关推荐</p>
              </div>
              <div className="main-r-b">
                <ul>
                  <li>
                    <img src="/images/LOLer.jpg" />
                    <p>
                      <a href="#">RNG史森明：跟着锤石有头收，UZI：和你合作太愉快了</a>
                      <i><img src="/images/video.jpg" /> &nbsp;&nbsp;&nbsp;2.7万</i>
                    </p>
                  </li>
                  <li>
                    <img src="/images/LOLer.jpg" />
                    <p>
                      <a href="#">RNG史森明：跟着锤石有头收，UZI：和你合作太愉快了</a>
                      <i><img src="/images/video.jpg" /> &nbsp;&nbsp;&nbsp;2.7万</i>
                    </p>
                  </li>
                  <li>
                    <img src="/images/LOLer.jpg" />
                    <p>
                      <a href="#">RNG史森明：跟着锤石有头收，UZI：和你合作太愉快了</a>
                      <i><img src="/images/video.jpg" /> &nbsp;&nbsp;&nbsp;2.7万</i>
                    </p>
                  </li>
                  <li>
                    <img src="/images/LOLer.jpg" />
                    <p>
                      <a href="#">RNG史森明：跟着锤石有头收，UZI：和你合作太愉快了</a>
                      <i><img src="/images/video.jpg" /> &nbsp;&nbsp;&nbsp;2.7万</i>
                    </p>
                  </li>
                  <li>
                    <img src="/images/LOLer.jpg" />
                    <p>
                      <a href="#">RNG史森明：跟着锤石有头收，UZI：和你合作太愉快了</a>
                      <i><img src="/images/video.jpg" /> &nbsp;&nbsp;&nbsp;2.7万</i>
                    </p>
                  </li>
                  <li>
                    <img src="/images/LOLer.jpg" />
                    <p>
                      <a href="#">RNG史森明：跟着锤石有头收，UZI：和你合作太愉快了</a>
                      <i><img src="/images/video.jpg" /> &nbsp;&nbsp;&nbsp;2.7万</i>
                    </p>
                  </li>
                  <li>
                    <img src="/images/LOLer.jpg" />
                    <p>
                      <a href="#">RNG史森明：跟着锤石有头收，UZI：和你合作太愉快了</a>
                      <i><img src="/images/video.jpg" /> &nbsp;&nbsp;&nbsp;2.7万</i>
                    </p>
                  </li>
                  <li>
                    <img src="/images/LOLer.jpg" />
                    <p>
                      <a href="#">RNG史森明：跟着锤石有头收，UZI：和你合作太愉快了</a>
                      <i><img src="/images/video.jpg" /> &nbsp;&nbsp;&nbsp;2.7万</i>
                    </p>
                  </li>
                  <li>
                    <img src="/images/LOLer.jpg" />
                    <p>
                      <a href="#">RNG史森明：跟着锤石有头收，UZI：和你合作太愉快了</a>
                      <i><img src="/images/video.jpg" /> &nbsp;&nbsp;&nbsp;2.7万</i>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default VideoDetail 