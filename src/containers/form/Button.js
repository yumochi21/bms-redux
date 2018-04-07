import React, { Component } from 'react';

import './Button.css';

class FlatButton extends Component {
  /*
  props
   - {Function} onClick
   - {Object} style
  execute
   - {Function} onClick(event)
  */

  constructor(props) {
    super();
    this.state = {
      style: (props.style != null) ? props.style : {}
    };
    this.onClick=this.onClick.bind(this);
  }

  onClick(event) {
    if (this.props.onClick == null) {
      return;
    }
    this.props.onClick(event);
  }

  render() {
    return (
      <a href="javascript:void(0)" className="Button Flat-button" style={this.state.style} onClick={this.onClick}>
        {this.props.children}
      </a>
    )
  }
}

class EmergencyButton extends Component {
  /*
  props
   - {Function} onClick
   - {Object} style
  execute
   - {Function} onClick(event)
  */

  constructor(props) {
    super();
    this.state = {
      style: (props.style != null) ? props.style : {}
    };
    this.onClick=this.onClick.bind(this);
  }

  onClick(event) {
    if (this.props.onClick == null) {
      return;
    }
    this.props.onClick(event);
  }

  render() {
    return (
      <a href="javascript:void(0)" className="Button Emergency-button" style={this.state.style} onClick={this.onClick}>
        {this.props.children}
      </a>
    )
  }
}

export default FlatButton;
export {EmergencyButton};
