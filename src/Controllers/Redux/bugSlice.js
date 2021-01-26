import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: "bug",
  initialState: {
    admin: false,
    LoggedIn: false
  },
  reducers: {
    signIn: (state, action) => {
      const {name, password} = action.payload;
      state.LoggedIn = true;
      state.admin = true;
    },
    signOut: (state) => {
      state.LoggedIn = false;
      state.admin = false;
    },
    createUser: (state, action) => {

    }
  },
});