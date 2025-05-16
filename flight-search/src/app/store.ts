import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from '../features/tickets/ticketsSlice';
import sortReducer from '../features/filters/sortSlice'; 

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    sort: sortReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
