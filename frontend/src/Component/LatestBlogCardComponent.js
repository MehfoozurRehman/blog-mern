import React from "react";
import "../Screens/HomeScreen.scss";
import blog__bg from "../Assests/blog__bg.png";

export default function LatestBlogCardComponent() {
  return (
    <div className="latest__post__card">
      <img src={blog__bg} alt="" width="100%" />
      <div className="date__auther__container">
        <div className="date__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 18 20"
          >
            <path
              id="ic_date_range_24px"
              d="M9,11H7v2H9Zm4,0H11v2h2Zm4,0H15v2h2Zm2-7H18V2H16V4H8V2H6V4H5A1.991,1.991,0,0,0,3.01,6L3,20a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,19,4Zm0,16H5V9H19Z"
              transform="translate(-3 -2)"
            />
          </svg>
          <div className="date">10 FEB 2018</div>
        </div>
        <div className="auther__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 16 16"
          >
            <path
              id="ic_perm_identity_24px"
              d="M12,5.9A2.1,2.1,0,1,1,9.9,8,2.1,2.1,0,0,1,12,5.9m0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H5.9V17c0-.64,3.13-2.1,6.1-2.1M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,9c-2.67,0-8,1.34-8,4v3H20V17C20,14.34,14.67,13,12,13Z"
              transform="translate(-4 -4)"
            />
          </svg>
          <div className="auther">writer</div>
        </div>
      </div>
      <div className="latest__blog__heading">
        Palatial, palatable Portugal: a long weekend.
      </div>
      <a
        style={{
          fontSize: "14px",
          color: "#33c257",
          padding: "0px 8px",
          marginBottom: "20px",
        }}
      >
        Read more
      </a>
    </div>
  );
}
