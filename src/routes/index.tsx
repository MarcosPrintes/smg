import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "@/store";

import { FeedPage } from "@/pages/Feed";
import { Login } from "@/pages/Login";

interface IRouteProps {
  component: React.ComponentType;
  path?: string;
  isAuth: boolean;
}

const PrivateFeedRoute = ({ component: RouteComponent, isAuth }: IRouteProps) =>
  isAuth ? <RouteComponent /> : <Navigate to="/" replace />;

const PrivateLoginRoute = ({
  component: RouteComponent,
  isAuth,
}: IRouteProps) => (!isAuth ? <RouteComponent /> : <Navigate to="/feed" />);

export function AppRoutes() {
  const { data } = useSelector((state: State) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          caseSensitive={true}
          element={<PrivateLoginRoute isAuth={data.access_token !== ''} component={Login} />}
        />
        <Route
          path="/feed"
          element={<PrivateFeedRoute isAuth={data.access_token !== ''} component={FeedPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
