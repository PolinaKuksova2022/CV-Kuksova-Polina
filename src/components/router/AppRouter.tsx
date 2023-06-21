import React from "react";
import { Route, Routes } from "react-router-dom";
import { path } from ".";

export const AppRouter = () => {
  return (
    <Routes>
      {path.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  );
};
