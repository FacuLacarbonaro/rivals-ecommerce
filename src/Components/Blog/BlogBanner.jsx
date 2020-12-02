import React from "react";

import "./BlogBanner.scss";

import post1 from "../../Assets/Img/jpeg/post-1.jpg";
import post2 from "../../Assets/Img/jpeg/post-2.jpg";
import post3 from "../../Assets/Img/jpeg/post-3.jpg";
import post4 from "../../Assets/Img/jpeg/post-4.jpg";

const BlogBanner = () => {
  return (
    <div className="blogBanner">
      <div className="blogBanner__title">
        <h2>FROM OUR BLOG</h2>
      </div>

      <div className="blogBanner__content">
        <div className="blogBanner__content__card">
          <img src={post1} alt="" />
          <div className="blogBanner__content__card__description">
            <h3>Mar 29,2020, 0 Comments</h3>
            <h2>SED ADIPISCING ORNARE</h2>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="blogBanner__content__card">
          <img src={post2} alt="" />
          <div className="blogBanner__content__card__description">
            <h3>Mar 29,2020, 0 Comments</h3>
            <h2>SED ADIPISCING ORNARE</h2>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="blogBanner__content__card">
          <img src={post3} alt="" />
          <div className="blogBanner__content__card__description">
            <h3>Mar 29,2020, 0 Comments</h3>
            <h2>SED ADIPISCING ORNARE</h2>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="blogBanner__content__card">
          <img src={post4} alt="" />
          <div className="blogBanner__content__card__description">
            <h3>Mar 29,2020, 0 Comments</h3>
            <h2>SED ADIPISCING ORNARE</h2>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
