import { createSlice } from "@reduxjs/toolkit";

type UnreadMessage = {
  chatId: string;
  unreadCount: number;
};

type ChatState = {
  unreadMessages: UnreadMessage[];
};

const initialState: ChatState = {
  unreadMessages: [],
};

const unreadMessages = createSlice({
  name: "unreadMessages",
  initialState,
  reducers: {
    setSupportChats: (state, action) => {
      state.unreadMessages = action.payload;
    },
    updateChatUnreadCount: (state, action) => {
      const { chatId, unreadCount } = action.payload;
      const chat = state.unreadMessages.find((chat) => chat.chatId === chatId);
      if (chat) {
        chat.unreadCount = unreadCount;
      } else {
        state.unreadMessages.push({ chatId, unreadCount });
      }
    },
  },
});

export const { setSupportChats, updateChatUnreadCount } =
  unreadMessages.actions;
export default unreadMessages.reducer;
