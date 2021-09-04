import React from "react";
import BlogCardComponent from "../Component/BlogCardComponent";
import BottonComponent from "../Component/BottonComponent";
import HeaderComponent from "../Component/HeaderComponent";

import "./HomeScreen.scss";
import LatestBlogCardComponent from "../Component/LatestBlogCardComponent";

export default function HomeScreen() {
  return (
    <div className="header">
      <HeaderComponent />
      <div className="container__content">
        <div className="content__left">
          <div className="small__heading">My Experience Blog</div>
          <div className="main__heading">My travel Ideas</div>
          <div className="para">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </div>
          <div className="search__box">
            <input placeholder="Search Blog" />
            <BottonComponent placeholder="Search" />
          </div>
        </div>
        <div className="content__Right">
          <img src="" alt="" srcset="" />
        </div>
      </div>
      <div className="border">
        <div className="line"></div>
      </div>
      <BlogCardComponent
        tag="category tag"
        heading="Meeting new 
faces"
        para="Later, when I would meet Binna and learn about his Port Douglas, I’d think back to these modern and contemporary canvases."
      />
      <BlogCardComponent
        tag="category tag"
        heading="Live the island life: 
        20 unique islands"
        para="Later, when I would meet Binna and learn about his Port Douglas, I’d think back to these modern and contemporary canvases."
      />
      <BlogCardComponent
        tag="category tag"
        heading="Solo in Seville: 
        a weekend in Spain"
        para="Later, when I would meet Binna and learn about his Port Douglas, I’d think back to these modern and contemporary canvases."
      />
      <div className="load__btn">
        <button className="load__more">Load more</button>
      </div>
      <div className="latest_post__section">
        <div className="blog__main__heading">Latest posts</div>
        <div className="para">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </div>
      </div>
      <div className="latest__blogs">
        <LatestBlogCardComponent />
        <LatestBlogCardComponent />
        <LatestBlogCardComponent />
      </div>
    </div>
  );
}
