const initialState = {
  users: [
    { id: '1', name: 'Rohaan' },
    { id: '2', name: 'RohaanAwan' },
    { id: '3', name: 'Rohaan99'},
    { id: '4', name: 'Rohaan9'}
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
      const { chatId, text, senderId } = action.payload;
      const existing = state.chats[chatId] || [];
      const newMessage = {
        text,
        senderId,
        timestamp: Date.now(),
      };
      return {...state,chats: {
          ...state.chats,
          [chatId]: [...existing, newMessage],
        },};
    }
    case 'ADDUSER':
    return {
      ...state,
      users: [...state.users, action.payload],
    };

    default:
      return state;
  }
};

export default ChatReducer;