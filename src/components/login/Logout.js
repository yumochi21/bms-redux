import React, { Component } from 'react';
import './Logout.css';

class Logout extends Component {

  constructor(props) {
    super();
  }

  logout = () => {
    // TODO ログアウト処理
    console.log('Logout -- execute');
  }

  render() {
    return (
      <a href="javascript:void(0)" className="Logout" onClick={this.logout}>Sign Out</a>
    );
  }
}

export default Logout;
