

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  selectedEvent: null,
  registeredAttendees: [],
  selectedDate: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
    setRegisteredAttendees: (state, action) => {
      state.registeredAttendees = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const {
  setEvents,
  setSelectedEvent,
  setRegisteredAttendees,
  setSelectedDate,
} = eventsSlice.actions;

export default eventsSlice.reducer;
