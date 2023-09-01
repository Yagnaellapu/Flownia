import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Billing,
  AppAccess,
  Notifications,
  Sitesetup,
  Zlinks,
  Usersetup,
  SiteName,
} from "./pages";
import { routes } from "./constants/routes.constants";
import UserName from "./pages/UserSetup/UserName";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.SITE_SETUP} element={<Sitesetup />} />
      <Route path={routes.USER_SETUP} element={<Usersetup />} />
      <Route path={routes.Z_LINKS} element={<Zlinks />} />
      <Route path={routes.APP_ACCESS} element={<AppAccess />} />
      <Route path={routes.NOTIFICATIONS} element={<Notifications />} />
      <Route path={routes.BILLING} element={<Billing />} />
      <Route path={`${routes.SITE_SETUP}/:siteName`} element={<SiteName />} />
      <Route path={`${routes.USER_SETUP}/:UserName`} element={<UserName />} />
    </Routes>
  );
};

export default AppRoutes;
