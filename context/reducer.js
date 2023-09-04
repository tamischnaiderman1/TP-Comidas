export const initialState = {
  token: null
};

export const ActionTypes = {
  SetToken: "SET_TOKEN"
}

export const reducer = (state, action) => {
  switch(action.type) {
    case ActionTypes.SetToken:
      return {
        ...state,
        token: action.value
      }
    default:
      return state;
  }
};