import React from "react";
import "../Screens/HomeScreen.scss";
import blog__bg from "../Assests/blog__bg.png";
export default function BlogCardComponent({ tag, heading, para }) {
  return (
    <>
      <div className="blog__container">
        <div className="blog__content">
          <div className="blog__content__left">
            <div className="blog__small__heading">{tag}</div>
            <div className="blog__main__heading">{heading}</div>
            <div className="para">{para}</div>
            <a style={{ color: "#33c257" }}>Read more</a>
          </div>
          <div className="blog__content__right">
            <img src={blog__bg} alt="" />
          </div>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
}
