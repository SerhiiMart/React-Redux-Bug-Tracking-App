import React from 'react';
import './bugForm.css';

export default (props)=>{
  return(
    <div className="bug-create">
      <h1>{props.title}</h1>
      <form>
        <label>Name:</label>
        <input name="name" placeholder='Bug Name' type="text" required></input>
        <label>Details:</label>
        <textarea name="details" placeholder='Detailed desctiption of the bug' required></textarea>
        <label>Steps:</label>
        <textarea name="steps" placeholder='Steps to reacreate the bug' required></textarea>
        <label>Priority</label>
        <select name="priority" required>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
        </select>
        <label>Assigned</label>
        <select name="assigned" >
            <option>SerhiiMart</option>
        </select>
        <label>Application Version:</label>
        <input name="version" placeholder="Application Version"></input>
        <button type="submit">{props.title}</button>
      </form>
    </div>
  )
};