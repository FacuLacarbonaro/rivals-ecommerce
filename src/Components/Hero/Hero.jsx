import React from "react";

import "./Hero.scss";

import { MdLocalShipping } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { CgHeadset } from "react-icons/cg";

import banner1 from "../../Assets/Img/jpeg/banner-1.jpg";
import banner2 from "../../Assets/Img/jpeg/banner-2.jpg";
import banner3 from "../../Assets/Img/jpeg/banner-3.jpg";
import banner4 from "../../Assets/Img/jpeg/banner-4.jpg";
import banner5 from "../../Assets/Img/jpeg/banner-5.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__row">
        <div className="hero__row__card">
          <img className="hero__row__card__img" src={banner1} alt="" />
          <div className="hero__row__card__description">
            <h2>NEW COLLECTION</h2>
            <h3>SHOP WOMEN'S</h3>
            <button>DISCOVER NOW</button>
          </div>
        </div>
        <div className="hero__row__card">
          <img className="hero__row__card__img" src={banner2} alt="" />
          <div className="hero__row__card__description ">
            <h2>NEW COLLECTION</h2>
            <h3>SHOP MEN'S</h3>
            <button>DISCOVER NOW</button>
          </div>
        </div>
      </div>

      <div className="hero__row2">
        
        <div className="hero__row2__cardHero">
          <img src={banner3} alt="" />

          <div className="hero__row2__cardHero__description text1">
            <h2>NEW COLLECTION</h2>
            <h3>SHOP WOMEN</h3>
            <button>SHOP NOW</button>
          </div>
        </div>

        <div className="hero__row2__cardHero ">
          <img src={banner4} alt="" />

          <div className="hero__row2__cardHero__description text2">
            <h2>NEW COLLECTION</h2>
            <h3>SHOP WOMEN</h3>
            <button>SHOP NOW</button>
          </div>
        </div>

        <div className="hero__row2__cardHero">
          <img src={banner5} alt="" />

          <div className="hero__row2__cardHero__description text3">
            <h2>NEW COLLECTION</h2>
            <h3>SHOP WOMEN</h3>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      <div className="hero__row3">
        <div className="hero__row3__item">
          <MdLocalShipping className='hero__row3__item__icon' />
          <div className="hero__row3__item__description">
            <h2>PAYMENT & DELIVERY</h2>
            <p>Free shipping for orders over $50</p>
          </div>
        </div>

        <div className="hero__row3__item">
          <FiRefreshCcw className='hero__row3__item__icon' />
          <div className="hero__row3__item__description">
            <h2>RETURN & REFUND</h2>
            <p>Free 100% money back guarantee</p>
          </div>
        </div>

        <div className="hero__row3__item">
          <CgHeadset className='hero__row3__item__icon' />
          <div className="hero__row3__item__description">
            <h2>QUALITY SUPPORT</h2>
            <p>Alway online feedback 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
