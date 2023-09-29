import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Billing,
  AppAccess,
  Notifications,
  // Sitesetup,
  Zlinks,

  SiteName,
  Releases,
  ScrollingMessage,
  SmsNotifications,
} from "./pages";
import { routes } from "./constants/routes.constants";
import UserName from "./pages/Setup/UserSetup/UserName";
// import NotificationsName from "./pages/Notifications/NotificationsName";
import Sitesetup from "./pages/Setup/Sitesetup/Sitesetup";
import Usersetup from "./pages/Setup/UserSetup/Usersetup";
// import Setup from "./pages/Setup/Setup";

const AppRoutes = () => {
  return (
    <div className="pt-20">
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.SITE_SETUP} element={<Sitesetup/>} />
          <Route path={routes.USER_SETUP} element={<Usersetup />} />
          <Route path={routes.Z_LINKS} element={<Zlinks />} />
          <Route path={routes.APP_ACCESS} element={<AppAccess />} />
          {/* <Route path={routes.NOTIFICATIONS} element={<Notifications />} /> */}
          <Route path={routes.BILLING} element={<Billing />} />
          <Route path={routes.RELEASES} element={<Releases />} />
          <Route path={routes.SCROLLING} element={<ScrollingMessage />} />
          <Route path={routes.SMS} element={<SmsNotifications />} />
          {/* <Route path={routes.LICENSE} element={<License />} /> */}

          <Route
            path={`${routes.SITE_SETUP}/:siteName`}
            element={<SiteName />}
          />
          <Route
            path={`${routes.USER_SETUP}/:UserName`}
            element={<UserName />}
          />
          {/* <Route
            path={`${routes.NOTIFICATIONS}/:NotificationsName`}
            element={<NotificationsName />}
          /> */}
        </Routes>
    </div>
  );
};

export default AppRoutes;
