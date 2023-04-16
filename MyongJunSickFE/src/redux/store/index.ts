import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer from './reducers';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {MealDataApi} from '../api/mealDataApi';

const store = configureStore({
  reducer: rootReducer,

  // API 미들웨어를 추가하면 cahsing, invalidation, polling, 기타 유용한 기능 사용 가능.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(MealDataApi.middleware),
});
export default store;

//타입스크립트에서 쓰기 위한 wrapper
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// 선택적, "Refetch On Focus/refetch Reconnect" 동작에 필수 - 사용자 지정을 위한 두 번째 인수로 선택적 콜백을 사용합니다.
setupListeners(store.dispatch);
