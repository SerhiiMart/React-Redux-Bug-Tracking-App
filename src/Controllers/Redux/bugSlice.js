import {createSlice} from '@reduxjs/toolkit';
export {retrieveBugs} from '../bugController';

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    getBugs: state => retrieveBugs(),
    createBugs: (state, action) => {

    },
    updateBugs: (state, action) => {

    },
    markComplete: (state, action) => {

    }
  }

});