import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props => {
        const path = token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
        return path;
      }}
    />
  );
};

export default PrivateRoute;
