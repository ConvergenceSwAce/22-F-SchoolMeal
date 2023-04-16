import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: {day: number} = {
  day: 0,
};
const pickDaySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    setDay(state, action: PayloadAction<number>) {
      state.day = action.payload;
    },
  },
  //extraReducer는 비동기 액션 생성시 필요
  // extraReducers: builder => {},
});

export const {setDay} = pickDaySlice.actions;

export default pickDaySlice;
