import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const manage = createSlice({
  name: "manage",
  initialState,
  reducers: {
    upDateUser: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },
  },
});

export const { upDateUser } = manage.actions;

export default manage.reducer;
