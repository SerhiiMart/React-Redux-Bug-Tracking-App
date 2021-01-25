import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: "authen",
  initialState: {
    admin: false,
    LoggedIn: false
  },
  reducers: {
    sigIn: (state, action) => {

    },
    sigOut: (state, action) => {

    }
  },
});