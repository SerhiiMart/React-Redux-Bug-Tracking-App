import {createSlice} from '@reduxjs/toolkit';


const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({name: "SerhiiMart"})
      state.push({name: "Serhii Mart2"})
    }
  }
  

});


export default slice.reducer;
export const {getUser} = slice.actions;