import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOGIN_REQUEST, LOGOUT } from './actions/actionTypes';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;
    
    const data = {
      email, password
    };
  }
  render() {
    return (
      <div className="App">
         <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
        <form onSubmit={this.onHandleLogin}>
        <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value="eve.holt@reqres.in"/>
        </div>
        <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value="cityslicka"/>
        </div>
        <div className="button-container">
          <button onClick={this.props.login}>Login</button>
          <button onClick={this.props.logout}>Logout</button>
        </div>
        
        </form>
        </div>
        <div className="input-container">
          <label>status: {this.props.status}</label><br/>
          <label>token: {this.props.token || ''}</label>
        </div>
    </div>
       
        
       
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.login.token,
    status: state.login.status,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({type:LOGIN_REQUEST, user: 'eve.holt@reqres.in', password:'cityslicka'}),
    logout: () => dispatch({type:LOGOUT}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
