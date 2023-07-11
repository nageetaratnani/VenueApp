/* eslint-disable prettier/prettier */
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Venue} from 'models/GetVenueListResponseModel';

export type EventName = {
  POP_UP_OPEN: Boolean;
};

type AtLeastOne<T, U = {[K in keyof T]: Pick<T, K>}> = Partial<T> & U[keyof U];

export type RefreshingEventType = AtLeastOne<EventName>;

export interface GeneralState {
  venues: Venue[];
}

const initialState: GeneralState = {
  venues: [],
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setVenues: (state, {payload}: PayloadAction<Venue[]>) => {
      state.venues = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setVenues} = generalSlice.actions;

export default generalSlice.reducer;
