import { createContext, useReducer } from "react";
import reducer from "../AuthReducer/reducer";
import store from "../AuthReducer/store";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, store)
    

  return <AppContext.Provider value={{state,dispatch}}>{children}</AppContext.Provider>;
};