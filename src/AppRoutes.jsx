import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Billing,
  AppAccess,
  Notifications,
  Tank,
  Tankproduct,
  Manager,
  Midgrade,
  Facility,
  Sitesetup,
  Zlinks,
  Usersetup,
} from "./pages";

import { routes } from "./constants/routes.constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={`${routes.SITE_SETUP}/*`} element={<Sitesetup />} />
      <Route path={routes.USER_SETUP} element={<Usersetup />} />
      <Route path={routes.Z_LINKS} element={<Zlinks />} />
      <Route path={routes.APP_ACCESS} element={<AppAccess />} />
      <Route path={routes.NOTIFICATIONS} element={<Notifications />} />
      <Route path={routes.BILLING} element={<Billing />} />
      <Route
        path={`${routes.SITE_SETUP}/:facilityName`}
        element={<Facility />}
      />
      <Route path={`${routes.SITE_SETUP}/tank`} element={<Tank />} />
      <Route
        path={`${routes.SITE_SETUP}/tank-product`}
        element={<Tankproduct />}
      />
      <Route
        path={`${routes.SITE_SETUP}/tank-product`}
        element={<Midgrade />}
      />
      <Route path={`${routes.USER_SETUP}/manager`} element={<Manager />} />
    </Routes>
  );
};

export default AppRoutes;
