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
        <textarea name="details" placeholder='Detailed desctiption of the bug' requred></textarea>
        <label htmlFor="">Steps:</label>
        <textarea name="steps" placeholder='Steps to reacreate the bug' requred></textarea>
        <label htmlFor="">Priority</label>
        <select name="priority" requred>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
        </select>
        <label htmlFor="">Assigned</label>
        <select name="assigned" >
            <option>SerhiiMart</option>
        </select>
        <label htmlFor="">Aplication Version:</label>
        <input name="version" placeholder="aplication version"></input>
        <button type="submit">{props.title}</button>
      </form>
    </div>
  )
};