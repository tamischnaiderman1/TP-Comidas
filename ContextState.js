import React, { useContext } from "react";

export const initialState = {
  menu: [],
};

export const ActionTypes = {
  setMenu: "SET_MENU",
  eliminarFromMenu: "ELIMINAR_FROM_MENU",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setMenu: {
      return { ...state, menu: [...state.menu, action.newValue]};
    }
    case ActionTypes.eliminarFromMenu: {
      return { ...state, menu: state.menu.filter((item) => item.id !== action.newValue)};
    }
    default: {
      return state;
    }
  }
};

export const initialContext = {
  contextState: initialState,
  setContextState: () => {},
};

const Context = React.createContext(initialContext);

export function ContextProvider({ children, state = initialState }) {
  const [contextState, setContextState] = React.useReducer(
    reducer,
    state
  );

  return (
    <Context.Provider value={{ contextState, setContextState }}>
      {children}
    </Context.Provider>
  );
}

export const useContextState = () => useContext(Context);
