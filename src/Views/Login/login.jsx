import React, {useState} from 'react';
import './login.css';

export default () => {
  return(
    <div className="loginBG">
      <form className="login-panel">
        <h2>Login:</h2>
        <input name="name" placeholder="Name" onChange={} value={}/>
        <h2>Password:</h2>
        <input name="password" type="password" placeholder="Password" onChange={} value={}/>
        <button type="submit" onClick={}>Login</button>
      </form>
    </div>
  );
};