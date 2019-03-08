import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style.scss'

class FanArt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fanartList: {},
    }
  }

  componentWillMount () {
    axios.get('/v1/fanartdata?page=1&pagesize=8').then(data => {
      console.log(data.data.msg.data)
      this.setState({
        fanartList: data.data.msg.data
      })
    })
  }

  render() {
    let fanartArr = []
    let fanartList = this.state.fanartList
    for (let item in fanartList) {
      fanartArr.push(
        <li key={item}>
          <Link to={'art-detail/' + fanartList[item].iContentId}>
            <img src={fanartList[item].sCoverUrl} className="te"/>
            <p>{fanartList[item].sTitle}<br /><img src={fanartList[item].sUrl}/> <i>{fanartList[item].sNickName}</i></p>
          </Link>
        </li>
      )
    }
    return (
      <div className="fanart">
        <div className="layout">
          <div className="fanart-top">
            <p></p>
            <span>FANART创作馆</span>
          </div>
          <div className="fanart-center">
            <div className="fanart-center-left">
              <ul>
                {fanartArr}
              </ul>
            </div>
            <div className="fanart-center-right">
              <div className="left">
                <img src='/images/fanart1.jpg'/>
              </div>
              <div className="right">
                <p><img src='/images/fanart2.jpg'/></p>
                <p><img src='/images/fanart3.jpg'/></p>
                <p><img src='/images/fanart4.jpg'/></p>
                <p><img src='/images/fanart5.jpg'/></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FanArt

