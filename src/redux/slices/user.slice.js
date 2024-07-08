import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
    currentUser: null,
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        handleGetValue: (state, action) => {
            state.users = action.payload;
            console.log(state.users);
        },
        handleLogOut: (state, action) => {
            state.users = null;
            // console.log(action);
            console.log(state.users);
        },
    },
});

export const { handleGetValue, handleLogOut } = userSlice.actions;

export default userSlice.reducer;
