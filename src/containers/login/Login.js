import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <table>
          <tr>
            <th>ユーザ名</th>
            <td>
              <input type="text" value="" />
            </td>
          </tr>
          <tr>
            <th>パスワード</th>
            <td>
              <input type="password" value="" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Login;
