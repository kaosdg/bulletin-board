import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import * as bulletinService from '../../services/bulletinService';

class Login extends Component {

  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
      isAuthenticated: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();

    let params = {
      username: this.state.username,
      password: this.state.password
    };
    
    bulletinService.checkLogin(params).then((result) => {
      localStorage.setItem('accessToken', result.data.data.tokens.accessToken);
      localStorage.setItem('refreshToken', result.data.data.tokens.refreshToken);
      this.setState({
        isAuthenticated: true
      });      
    });
  }

  handleChange (event) {
    event.preventDefault();

    let inputName = event.target.name;
    let inputValue = event.target.value;
    let inputObj = {};

    inputObj[inputName] = inputValue;
    this.setState(inputObj);
  }

  render () {
    if(this.state.isAuthenticated === true) {
      return <Redirect to="/dashboard"/>;
    }

    return (
      <div className="section">
        <h2>Login Page</h2>
        <div className="form-container">
          <form id="login-form" onSubmit={this.handleSubmit}>
            <div>
              <label>Username</label>
              <input
                type="text"
                value={this.state.username}
                onChange={(event)=> this.setState({username:event.target.value})}
              />  
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                onChange={(event)=> this.setState({password:event.target.value})}
              />  
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

}

export default Login;
