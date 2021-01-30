import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBugs} from '../../Controllers/Redux/bugSlice';
import BugView from '../Components/Bug-view/bugView';
import BugCard from '../Components/Bugcard/bugCard';

export default ()=> {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name: '',
    isDisplayed: false
  });
  const dispatch = useDispatch();
  const {bugs} = useSelector(state=>state);
  useEffect(()=>{
    dispatch(getBugs());
  }, [bugs.length < 1]);

  function BugClicked(name){
    SET_DISPLAY_BUG({
      isDisplayed:!DISPLAY_BUG.isDisplayed,
      name: name,
    })
  };
  return (
    <div className='page-container'>
      {bugs.map((bug, key)=> (
        <BugCard key={key} bug={bug} clicked={BugClicked} />
      ))}
      {DISPLAY_BUG.isDisplayed && <BugView bug={bugs.filter((bug)=>{return bug.name == DISPLAY_BUG.name})} />}
    </div>
  )
}