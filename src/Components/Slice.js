import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name:"counter",
    initialState:{
        counter: 0,

    },
    reducers: {
      increment: function (state, action) {
        state.counter = state.counter + 1;
      },
      decrement: function (state, action) {
        state.counter = state.counter >0 ?state.counter-1: 0;
      },
    },
  });

  export const {increment, decrement} = counterSlice.actions
  export default counterSlice.reducer
  