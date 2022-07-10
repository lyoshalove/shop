import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface message {
  id: number;
  text: string;
  isGood: boolean;
}

export interface notificationsState {
  messages: message[]
}

const initialState: notificationsState = {
  messages: [],
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    deleteNotification(state) {
      state.messages.shift();
      console.log(state.messages);
    },
    addNotification(state, action: PayloadAction<message>) {
      state.messages.push(action.payload);
    }
  }
});

export const { addNotification, deleteNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;