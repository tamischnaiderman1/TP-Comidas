import { useContext, createContext, useReducer } from "react";
import _ from "lodash";
import axios from "axios";
import { ActionTypes, initialState, reducer } from "./reducer";

const initialContext = { state: initialState, setState: () => {} }
const AuthContext = createContext(initialContext);

export const AuthProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  const value = { state, setState };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
