import React from 'react';
import Priority from '../../../Controllers/prioritycontroller';
import './card.css';



export default (props) => {
  const {level, color} = Priority(props.Priority);

  return(
      <div className="dashboard-card" style={{color : color}}>
        <h2>Total: {level}</h2>
        <p>{props.count}</p>
      </div>
    )

}

