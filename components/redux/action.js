export const SetUser = (user) => ({
  type: 'SETUSER',
  payload: user,
});

export const AddMessage = (chatId, text, senderId) => ({
  type: 'ADDMESSAGE',
  payload: {chatId, text, senderId,},
});

export const AddUser = (user) => ({
  type: "ADDUSER",
  payload: user
});