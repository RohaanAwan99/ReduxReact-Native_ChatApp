export const SetUser = (user) => ({
  type: 'SETUSER',
  payload: user,
});

export const AddMessage = (id, text) => ({
  type: 'ADDMESSAGE',
  payload: {
    id,
    text,
  },
});