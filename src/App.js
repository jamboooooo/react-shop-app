import React from "react";
import Header from "./Header";
import Products from "./Products";
import Siidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Siidebar />
        <Products />
      </main>
    </>
  );
}

export default App;
