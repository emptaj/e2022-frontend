import React from "react";

import './App.css';
import Home from './pages/Home';
import MenuDrawer from "./components/MenuDrawer";

function App() {
  return (
    <div>
      <MenuDrawer />
      <Home />
    </div>
  );
}

export default App;
