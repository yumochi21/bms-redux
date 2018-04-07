import React, { Component } from 'react';

import './MyPage.css';

import CommonLogic from '../../logic/common/CommonLogic.js';

class MyPage extends Component {
  render() {
    return (
      <div className="Mypage">
        <MyPageTitle></MyPageTitle>
        <MyPagewidget title="ActiveLog"><ActiveLog /></MyPagewidget>
        <MyPagewidget></MyPagewidget>
        <MyPagewidget></MyPagewidget>
      </div>
    )
  }
}

class MyPageTitle extends Component {
  render() {
    return (
      <div className="Mypage-title">マイページ</div>
    )
  }
}

class MyPagewidget extends Component {
  /*
  props
   - {String} title
   - {VirtualDOM} children
  */
  constructor(props) {
    super();
    this.state = {
      showDetail: true,
      style: {
        height: '200px'
      }
    };
    this.switchDisplay = this.switchDisplay.bind(this);
  }

  switchDisplay() {
    var showDetail = !this.state.showDetail;
    this.setState({
      showDetail: showDetail,
      style: {
        'min-height': (showDetail ? '300px' : 'auto')
      }
    })
  }

  render() {
    return (
      <div className="Mypage-widget" style={this.state.style}>
        <div className="Mypage-widget-title" onClick={this.switchDisplay}>
          {this.props.title}
        </div>
        <div className="Mypage-widget-body">
          {this.state.showDetail ? this.props.children : null}
        </div>
      </div>
    )
  }
}

class ActiveLog extends Component {
  /*
  props
   - {Object[]} userList
  */

  // TODO: propsにユーザ情報を持つ
  constructor() {
    super();
    this.state = {
      userList: [
        {img: 'http://themifycloud.com/demos/templates/joli/assets/images/users/user.jpg', lineStatus: 1, contactStatus: 0},
        {img: 'http://themifycloud.com/demos/templates/joli/assets/images/users/user2.jpg', lineStatus: 0, contactStatus: 1},
        {img: 'http://themifycloud.com/demos/templates/joli/assets/images/users/user.jpg', lineStatus: 1, contactStatus: 0},
        {img: 'http://themifycloud.com/demos/templates/joli/assets/images/users/user2.jpg', lineStatus: 0, contactStatus: 1},
        {img: 'http://themifycloud.com/demos/templates/joli/assets/images/users/user.jpg', lineStatus: 1, contactStatus: 0}
      ]
    }
  }

  render() {
    return (
      <div className="Active-log">
        {
          this.state.userList.map(
            user => {
              return <UserProfileSummary img={user.img} lineStatus={user.lineStatus} contactStatus={user.contactStatus} />
            }
          )
        }
      </div>
    )
  }
}

class UserProfileSummary extends Component {
  /*
  props
   - {String} img
   - {Number} lineStatus
   - {Number} contactStatus
  */

  render() {
    return (
      <div className="User-profile-summary">
        <img src={this.props.img} />
        <div>{(this.props.lineStatus == 0) ? 'Offline' : 'Online'}</div>
        <div>{(this.props.contactStatus == 0) ? 'Disabled Constact' : 'Enabled Constact'}</div>
      </div>
    )
  }
}

export default MyPage;
