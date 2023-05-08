import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';

const baseUrl = API_URL;
console.log(baseUrl);

export const MealDataApi = createApi({
  reducerPath: 'mealDataApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  tagTypes: ['incamMealData', 'jacamMealData'],
  endpoints: builder => ({
    getIncamMeal: builder.query({
      query: () => '/incam',

      // 쿼리 결과에 tag을 주입한다. 나중에 invalidesTags로 재 호출/렌더링한다.
      providesTags: (result, error, arg) => [{type: 'incamMealData'}],
      // query결과를 받아서 서버에 요청하여 결과를 받기 전에 캐쉬를 update하거나 다른 처리로 가공할 수 있다
      async onQueryStarted(
        arg,
        {dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData}, //queryFulfilled는 Promise
      ) {},

      // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
      async onCacheEntryAdded(
        arg, //endpoint 호출에서 전달된 값 예, { id, post}
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
          updateCachedData,
        },
      ) {},
    }),
    getJacamMeal: builder.query({
      query: () => '/jacam',
      providesTags: (result, error, arg) => [{type: 'jacamMealData'}],

      // query결과를 받아서 서버에 요청하여 결과를 받기 전에 캐쉬를 update하거나 다른 처리로 가공할 수 있다
      async onQueryStarted(
        arg,
        {dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData}, //queryFulfilled는 Promise
      ) {},
      // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
      async onCacheEntryAdded(
        arg, //endpoint 호출에서 전달된 값 예, { id, post}
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
          updateCachedData,
        },
      ) {},
    }),
    getNotice: builder.query({
      query: () => '/notice',
      // query결과를 받아서 서버에 요청하여 결과를 받기 전에 캐쉬를 update하거나 다른 처리로 가공할 수 있다
      async onQueryStarted(
        arg,
        {dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData}, //queryFulfilled는 Promise
      ) {},
      // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
      async onCacheEntryAdded(
        arg, //endpoint 호출에서 전달된 값 예, { id, post}
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
          updateCachedData,
        },
      ) {},
    }),
  }),
});

export const {useGetIncamMealQuery, useGetJacamMealQuery, useGetNoticeQuery} = MealDataApi;
