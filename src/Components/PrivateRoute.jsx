import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../AppContext.jsx/AppContextProvider";

const PrivateRoute = ({children}) => {
  const { state, dispatch } = useContext(AppContext);
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
