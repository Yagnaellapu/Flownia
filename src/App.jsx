import React, { useState } from "react";
import { Header, SideBar, Footer } from "./components";
import AppRoutes from "./AppRoutes";

function App() {
  const [isOpen, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!isOpen);
  };

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
