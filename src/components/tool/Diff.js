import React, { Component } from 'react';

class Diff extends Component {

  constructor(props) {
    super();
    this.state = {
      styleObj: {
        width: '200px'
      },
      textBefore: '',
      textAfter: '',
      resultText: ''
    };

    this.onChangeBefore=this.onChangeBefore.bind(this);
    this.onChangeAfter=this.onChangeAfter.bind(this);
    this.onChangeEvent=this.onChangeEvent.bind(this);
  }

  onChangeBefore(event) {
    this.setState(
      {textBefore: event.target.value}
    );
    this.onChangeEvent(event.target.value, this.state.textAfter);
  }

  onChangeAfter(event) {
    this.setState(
      {textAfter: event.target.value}
    );
    this.onChangeEvent(this.state.textBefore, event.target.value);
  }

  onChangeEvent(textBefore, textAfter) {
    if (textBefore == textAfter) {
      this.setState({
        resultText: '● 一致'
      });
    } else {
      this.setState({
        resultText: '× 不一致'
      });
    }
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>変更前：</th>
            <td>
              <input type="text" style={this.state.width} value={this.state.textBefore} onChange={this.onChangeBefore} />
            </td>
          </tr>
          <tr>
            <th>変更後：</th>
            <td>
              <input type="text" style={this.state.width} value={this.state.textAfter} onChange={this.onChangeAfter} />
            </td>
          </tr>
          <tr>
            <th>結果：{this.state.resultText}</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Diff;
