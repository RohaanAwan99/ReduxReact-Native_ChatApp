const initialState = {
  users: [
    { id: '1', name: 'Rohaan' },
    { id: '2', name: 'RohaanAwan' },
  ],
  currentUser: null,
  chats: {},
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETUSER':
      return {
        ...state,
        currentUser: action.payload,
      };

    case 'ADDMESSAGE': {
      const { id, text } = action.payload;
      const existing = state.chats[id] || [];
      const message = { text, timestamp: Date.now() };

      return {
        ...state,
        chats: {
          ...state.chats,
          [id]: [...existing, message],
        },
      };
    }

    default:
      return state;
  }
};

export default ChatReducer;