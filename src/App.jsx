import React from "react";
import { Header,  Footer } from "./components";
import AppRoutes from "./AppRoutes";

function App() {
  
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <AppRoutes />
        <Footer />
    </div>
  );
}

export default App;
