import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store/reducers';

// false: 인문캠퍼스, true: 자연캠퍼스
const initialState: {campus: boolean} = {
  campus: false,
};
const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setCampus(state, action) {
      state.campus = action.payload;
    },
  },
  //extraReducer는 비동기 액션 생성시 필요
  // extraReducers: builder => {},
});

export const {setCampus} = settingSlice.actions;

export const campus = (state: RootState) => state.setting.campus;

export default settingSlice;
