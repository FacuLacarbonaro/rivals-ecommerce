import React from "react";

import "./Footer.scss";

import LogoWhite from "../../Assets/Img/png/logo__white.png";

import Sponsor1 from "../../Assets/Img/png/marca-1.png";
import Sponsor2 from "../../Assets/Img/png/marca-2.png";
import Sponsor3 from "../../Assets/Img/png/marca-3.png";
import Sponsor4 from "../../Assets/Img/png/marca-4.png";
import Sponsor5 from "../../Assets/Img/png/marca-5.png";
import Sponsor6 from "../../Assets/Img/png/marca-6.png";
import Sponsor7 from "../../Assets/Img/png/marca-7.png";
import Payments from "../../Assets/Img/png/payments.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__sponsor">
          <img src={Sponsor1} alt="" />
        </div>
        <div className="footer__top__sponsor">
          <img src={Sponsor2} alt="" />
        </div>
        <div className="footer__top__sponsor">
          <img src={Sponsor3} alt="" />
        </div>
        <div className="footer__top__sponsor">
          <img src={Sponsor4} alt="" />
        </div>
        <div className="footer__top__sponsor">
          <img src={Sponsor5} alt="" />
        </div>
        <div className="footer__top__sponsor">
          <img src={Sponsor6} alt="" />
        </div>
        <div className="footer__top__sponsor">
          <img src={Sponsor7} alt="" />
        </div>
      </div>

      <div className="footer__middle">
        <div className="footer__middle__main">
          <div className="footer__middle__main__left">
            <img src={LogoWhite} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              fuga doloremque nisi minus at sit voluptate, accusantium natus
              perferendis delectus aliquam quae debitis temporibus nulla, rem
              nostrum ad reprehenderit molestias.
            </p>
          </div>
          <div className="footer__middle__main__right">
            <div className="footer__middle__main__right__col">
              <h2>USEFUL LINKS</h2>
              <ul>
                <li>About Rivals</li>
                <li>How to shop in Rivals</li>
                <li>FAQ</li>
                <li>Contact us</li>
                <li>Log in</li>
              </ul>
            </div>
            <div className="footer__middle__main__right__col">
              <h2>CUSTOMER SERVICE</h2>
              <ul>
                <li>Payment Methods</li>
                <li>Money-Back guarantee!</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer__middle__main__right__col">
              <h2>MY ACCOUNT</h2>
              <ul>
                <li>Log in</li>
                <li>View Cart</li>
                <li>My Whishlist</li>
                <li>Track My Order</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="footer__middle__main__right__col">
              <h2>SIGN UP TO NEWSLETTER</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                adipisci explicabo repellendus nesciunt praesentium maxime
                repudiandae sit eos!
              </p>
            </div>
          </div>
        </div>
        <div className="footer__middle__main__bottom">
          <div>
            <h2>Got Question? Call us 24/7</h2>
            <p>+0123 456 789</p>
          </div>
          <div>
            <h2>Payment Method</h2>
            <img src={Payments} alt="" />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          Copyright 2020 Rivals Store. All Rights Reserved. Terms of use |
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
