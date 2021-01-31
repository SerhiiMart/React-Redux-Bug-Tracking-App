import React from 'react';
import './bugForm.css';

export default (props) => {
  return(
    <div className="bug-create">
      <h1>{props.title}</h1>
      <form action="">
        <label htmlFor="">Name:</label>
        <input name="name" placeholder='Bug Name' type="text" required> </input>
        <label htmlFor="">Details:</label>
        <textarea name="details" placeholder='Detailed desctiption on the bug' requred></textarea>
      </form>
    </div>
  )
};