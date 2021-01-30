import React from 'react';
import ViewSection from './bugViewSection';
import BugModel from "../../../Models/bugModel";
import {useDispatch} from 'react-redux';
import {markComplete} from '../../../Controllers/Redux/bugSlice';
import './bugView.css';

export default (props) => {
  const dispatch = useDispatch();
  const bug = new BugModel(props.bug);
  return (
    <div className="bug-view">
      <button onClick={props.clicked} className="close-Btn">Close</button>

      <h1>{bug.name}</h1>
      <ViewSection title="Details" info={bug.details} />
      <ViewSection title="Steps" info={bug.steps} />
      <ViewSection title="Priority" info={bug.priority} />
      <ViewSection title="Creator" info={bug.creator} />
      <ViewSection title="App version" info={bug.version} />
      <ViewSection title="Time created" info={bug.time} />
      <button onClick={()=>{dispatch(markComplete())}} className="">Mark as a completed</button>
    </div>
  );
};