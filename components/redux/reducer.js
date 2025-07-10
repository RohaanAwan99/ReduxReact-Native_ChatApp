const initialState = {
  users: [
    { id: '0', name: 'MasterUser', password: 'password'},
    { id: '1', name: 'Rohaan', password: 'password' },
    { id: '2', name: 'RohaanAwan', password: 'password' },
    { id: '3', name: 'Rohaan99', password: 'password'},
    { id: '4', name: 'Rohaan9', password: 'password'}
  ],
  currentUser: null,
  chats: {},
};

function CheckExistingUsers(userToAdd, userList)
{
  const { id, name } = userToAdd;

  for (let i = 0; i < userList.length; i++) {
    if (userList[i].name === name || userList[i].id === id) {
      return false;
    }
  }

  return true;
}

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
      if (!CheckExistingUsers(action.payload, state.users)) {
        alert("Please use a unique username and try again.")
        return state;
      }
      alert("Sign up successful. Please proceed to login page.")
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "LOGOUT":
      return {
        ...state, 
        currentUser: action.payload,
      }
    default:
      return state;
  }
};

export default ChatReducer;