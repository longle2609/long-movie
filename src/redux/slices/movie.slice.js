import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrMovie: [],
  currentMovie: null,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    handleGetAllMovie: (state, action) => {
      state.arrMovie = action.payload;
    },
  },
});

export const { handleGetAllMovie } = movieSlice.actions;
export default movieSlice.reducer;
