import React, { useState, useEffect, useRef } from "react";
import mainPoint from "./img/main-point.svg";
import "./Main.scss";
import CompLink from "../CompLink/CompLink";

function Main(props) {
  const wrappSize = useRef(null);
  const mainTitle = useRef(null);

  // параллакс эффект
  function Parallax(e) {
    //  размеры обёртки
    const heightR = wrappSize.current.offsetHeight / 2;
    const widthR = wrappSize.current.offsetWidth / 2;

    let h;
    if (e.pageY > heightR) {
      h = e.pageY / 15;
    }
    if (e.pageY < heightR) {
      h = -e.pageY / 10;
    }
    let w;
    if (e.pageX > widthR) {
      w = e.pageX / 25;
    }
    if (e.pageX < widthR) {
      w = -e.pageX / 20;
    }

    mainTitle.current.setAttribute(
      "style",
      `transform:translate(${w}px, ${h}px)`
    );
  }

  return (
    <main ref={wrappSize} onMouseMove={Parallax}>
      <CompLink className="main__where" content={"where?"} url={"testpage"} />
      <div className="main__section">
        <div className="main__section__circle"></div>
        <h1 ref={mainTitle}>FULL-CYCLE EVENT AGENCY</h1>
        <img className="main__point" src={mainPoint} alt="main-point" />
      </div>
      <CompLink className="main__what" content={"what?"} url={"testpage"} />
    </main>
  );
}

export default Main;
