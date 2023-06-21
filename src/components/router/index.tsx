import React from "react";
import { Navigate } from "react-router-dom";
import { PageMain } from "../../pages/PageMain/PageMain";
import { Page404 } from "../../pages/Page404/Page404";

export interface TPath {
  path: string;
  component: JSX.Element;
  name?: string;
  hidden?: boolean;
}
export const path: TPath[] = [
  { path: "/", component: <PageMain />, name: "Основная" },
  { path: "/*", component: <Page404 />, name: "404", hidden: true },
];
