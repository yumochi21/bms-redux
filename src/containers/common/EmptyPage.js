import React, { Component } from 'react';

import './Common.css'
import './EmptyPage.css';

class EmptyPage extends Component {

  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="Page-full Empty-page">
        <div className="Empty-logo">Empty Page</div>
        {/*
        <FlatButton>検索</FlatButton>
        <EmergencyButton>注意</EmergencyButton>
        */}
      </div>
    )
  }
}

export default EmptyPage;
