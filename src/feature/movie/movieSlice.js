import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kidsTv: null,
  hollywood: null,
  newTo: null,
  original: null,
  popular: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.kidsTv = action.payload.kidsTv;
      state.hollywood = action.payload.hollywood;
      state.newTo = action.payload.newTo;
      state.original = action.payload.original;
      state.popular = action.payload.popular;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectkidsTv = (state) => state.movie.kidsTv;
export const selecthollywood = (state) => state.movie.hollywood;
export const selectnewTo = (state) => state.movie.newTo;
export const selectoriginal = (state) => state.movie.original;
export const selectpopular = (state) => state.movie.popular;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;