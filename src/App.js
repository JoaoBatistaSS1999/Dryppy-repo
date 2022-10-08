import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/MainContent";
import Farms from "./pages/Farms";
import Home from "./pages/Home";
import Staking from "./pages/Staking";
import Trade from "./pages/Trade";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Main />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/farms" element={<Farms />} />
            <Route path="/staking" element={<Staking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
