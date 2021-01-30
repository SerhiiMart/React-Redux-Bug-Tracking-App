import React from 'react';
import ViewSection from './bugViewSection';
import BugModel from "../../../Models/bugModel";
import './bugView.css';

export default (props) => {
  const bug = new BugModel(props.bug);
  return (
    <div className="bug-view">
      <h2>{bug.name}</h2>
      <ViewSection title="Details" info={bug.detail} />
      <ViewSection title="Steps" info={bug.steps} />
      <ViewSection title="Priority" info={bug.priority} />
      <ViewSection title="Creator" info={bug.creator} />
      <ViewSection title="App version" info={bug.version} />
      <ViewSection title="Time created" info={bug.time} />
    </div>
  );
};