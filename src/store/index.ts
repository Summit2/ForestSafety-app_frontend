import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Map from './features/map';
import App from './features/app';
import User from './features/user';
import SearchParams from './features/searchParams';
import { polygonApi } from '@api/paths/polygonApi';
import { userApi } from '@api/paths/userApi';

export const store = configureStore({
  reducer: {
    map: Map,
    app: App,
    user: User,
    searchParams: SearchParams,
    [polygonApi.reducerPath]: polygonApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(polygonApi.middleware)
      .concat(userApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
