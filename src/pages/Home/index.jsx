import React from "react";
import Header from "../../layout/Header";
import "./Home.css";
import bitcoin from "./bitcoin.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="banner">
        <div className="banner__text">
          <h1>
            Our basic thesis for bitcoin
            <br />
            is that it is better than gold.
          </h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random
            <br />
            text. it has roots in a piece of classical latin litrature from 45
            BC, making it over 2000 years old
          </p>

          <a href="#some" className="round-btn">
            <div className="round-btn__inner">
              <i className="fa fa-play" />
            </div>
            <small>
              <b>Learn more</b>
            </small>
          </a>
        </div>
        <div className="banner__img-container">
          <img src={bitcoin} alt="Bitcoin" />
        </div>
      </div>
      <div className="quick-links">
        <a href="#link" className="quick-links__link">
          <i className="fa fa-share-alt" />
          <p>Share to</p>
        </a>
        <a href="#link" className="quick-links__link">
          <i className="fa fa-audio-description" />
          <p>recent news</p>
        </a>
        <a href="#link" className="quick-links__link">
          <i className="fa fa-cog" />
          <p>analytics</p>
        </a>
        <a href="#link" className="quick-links__link">
          <i className="fa fa-btc" />
          <p>wallet</p>
        </a>
      </div>
      <div className="social-links">
        <a className="social-links__link" href="www.facebook.com">
          <i className="fa fa-facebook" />
        </a>
        <a className="social-links__link" href="www.twitter.com">
          <i className="fa fa-twitter" />
        </a>
        <a className="social-links__link" href="www.linkedin.com">
          <i className="fa fa-linkedin" />
        </a>
        <a className="social-links__link" href="www.instagram.com">
          <i className="fa fa-instagram" />
        </a>
      </div>
    </div>
  );
};

export default Home;
