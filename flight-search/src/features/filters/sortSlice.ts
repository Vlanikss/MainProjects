import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortType = 'price' | 'duration' | 'connections';

interface SortState {
  sortBy: SortType;
}

const initialState: SortState = {
  sortBy: 'price',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<SortType>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortSlice.actions;
export default sortSlice.reducer;
