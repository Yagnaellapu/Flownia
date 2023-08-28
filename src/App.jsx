import React, { useEffect, useState } from "react";
import { Header, SideBar, Footer } from "./components";
import AppRoutes from "./AppRoutes";
import { useLocation } from "react-router-dom";
import { routes } from "./constants/routes.constants";
import { menuList } from "./constants/menu.constants";

function App() {
  const location = useLocation();
  const [isOpen, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const routeName = Object.keys(routes);
    const route = Object.values(routes).findIndex(
      (route) => route === location.pathname
    );
    document.title = `Flownia | ${menuList[routeName[route]]}`;
  }, [location]);

  return (
    <div className="flex">
      <SideBar isOpen={isOpen} />
      <div className="flex flex-col w-full">
        <Header toggleSidebar={toggleSidebar} />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
