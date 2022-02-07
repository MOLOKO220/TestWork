import "./App.scss";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Ticker from "./components/Ticker/Ticker";
import NewPage from "./components/NewPage/NewPage";

function App() {
  //заглушка
  const plug = useRef(null);
  useEffect(() => {
    plug.current.classList.add("plug-activ");
  });

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="testWork"
            element={
              <div>
                <Header />
                <Main />
                <Footer />
                <Ticker className="top-ticker" direction="right" />
                <Ticker className="bot-ticker" direction="left" />
              </div>
            }
          />
          <Route exact path="testWork/testpage" element={<NewPage />} />
        </Routes>
      </Router>
      <div ref={plug} className="plug"></div>
    </>
  );
}

export default App;
