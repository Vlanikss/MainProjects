import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { Ticket } from '../../types/ticket';

const ticketsAdapter = createEntityAdapter<Ticket>();

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  const res = await fetch('http://localhost:3001/tickets'); // JSON-server
  return (await res.json()) as Ticket[];
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: ticketsAdapter.getInitialState({
    loading: false,
    error: null as string | null,
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTickets.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        ticketsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка';
      });
  },
});

export default ticketsSlice.reducer;
export const ticketsSelectors = ticketsAdapter.getSelectors((state: any) => state.tickets);
