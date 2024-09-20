import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { api } from '../features/api/apiSlice';
import { counterSlice } from '../features/counter/counterSlice';
import { todosSlice } from '../features/todos/todosSlice';

const rootReducer = combineSlices(api, counterSlice, todosSlice);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
