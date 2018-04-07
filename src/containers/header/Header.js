import React, { Component } from 'react';

import './Header.css';
import Logout from '../login/Logout.js';

import CommonLogic from '../logic/common/CommonLogic.js';

class Header extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <header className="Header">
        <HeaderSearchForm />
        <UserInfo userName={CommonLogic.getUserName()} />
        <Logout />
      </header>
    )
  }
}

class HeaderSearchForm extends Component {

  constructor(props) {
    super();
    this.state = {
      searchText: ''
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event) {
    this.setState({
      searchText: event.target.result
    })
  }

  render() {
    return (
      <div className="Header-search">
        <input type="text" value={this.state.searchText} placeholder="Search" onChange={this.onChangeText} className="Header-search-text" />
      </div>
    )
  }
}

class UserInfo extends Component {

  /*
  props
   - {String} userName
  */
  constructor(props) {
    super();
    this.state = {
      userName: props.userName
    }
  }

  render() {
    return (
      <a className="User-info">
        {this.state.userName}
      </a>
    );
  }
}

export default Header;
