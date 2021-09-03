import React from "react";
import "../App.scss";
import BottonComponent from "./BottonComponent";
export default function HeaderComponent() {
  return (
    <div className="header">
      <div className="nav__bar">
        <div className="nav__bar__logo">MY BLOG</div>
        <div className="nav__bar__items">
          <ul>
            <li>
              <a href="/">Hotel Experiences</a>
            </li>
            <li>
              <a href="/">Best travel places</a>
            </li>
            <li>
              <a href="/">Cheap traveling ideas</a>
            </li>
            <li>
              <a href="/">Wildlife Safari</a>
            </li>
            <li>
              <a href="/">Best Street food</a>
            </li>
          </ul>
        </div>
        <div className="nav__bar__btn">
          <BottonComponent placeholder="Subscribe" />
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
