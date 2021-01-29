import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../../Controllers/Redux/authSlice';
import './login.css';

export default () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput]= useState({
    name: "",
    password: ""
  });

  //Setting the local state
  function inputChanged(e){
    setFormInput({
      ...formInput,
      [e.target.name]:e.target.value
    })
  }

  function submit(e) {
    dispatch(signIn(formInput));
    e.preventDefault();
  }

  return(
    <div className="login">
      <form className="loginPanel">
        <h2>Login:</h2>
        <input name="name" placeholder="Name" onChange={inputChanged} value={formInput.name}/>
        <input name="password" type="password" placeholder="Password" onChange={inputChanged} value={formInput.password}/>
        <button type="submit" onClick={submit}>Submit</button>
      </form>
    </div>
  );
};